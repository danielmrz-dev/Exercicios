package br.com.biblioteca.config;

import br.com.biblioteca.domain.auth.TokenService;
import br.com.biblioteca.domain.usuario.Usuario;
import br.com.biblioteca.domain.usuario.UsuarioRepository;
import br.com.biblioteca.exception.DefaultErrorResponse;
import br.com.biblioteca.exception.TokenGenerationException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.LocalDateTime;

@Component
public class AccessTokenFilter extends OncePerRequestFilter {

	private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper().findAndRegisterModules();

	@Autowired
	private TokenService tokenService;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	protected void doFilterInternal(
		HttpServletRequest request,
		HttpServletResponse response,
		FilterChain filterChain
	) throws ServletException, IOException {
		var token = retrieveTokenFromRequest(request);

		if (token != null) {
			try {
				var username = tokenService.verifyToken(token);
				Usuario usuario = usuarioRepository.findByEmailIgnoreCase(username)
					.orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado."));

				Authentication auth = new UsernamePasswordAuthenticationToken(
					usuario, null, usuario.getAuthorities()
				);

				SecurityContextHolder.getContext().setAuthentication(auth);
			} catch (TokenGenerationException | UsernameNotFoundException exception) {
				sendUnauthorizedResponse(response, exception.getMessage());
				return;
			}
		}

		filterChain.doFilter(request, response);
	}

	private void sendUnauthorizedResponse(HttpServletResponse response, String message) throws IOException {
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
		response.setContentType("application/json;charset=UTF-8");
		DefaultErrorResponse errorResponse = new DefaultErrorResponse(
			"Unauthorized",
			HttpServletResponse.SC_UNAUTHORIZED,
			message,
			LocalDateTime.now()
		);
		response.getWriter().write(OBJECT_MAPPER.writeValueAsString(errorResponse));
	}

	private String retrieveTokenFromRequest(HttpServletRequest request) {
		String header = request.getHeader("Authorization");
		if (header != null) {
			return header.replace("Bearer ", "");
		}
		return null;
	}
}