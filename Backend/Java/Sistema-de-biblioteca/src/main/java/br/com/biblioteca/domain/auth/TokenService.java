package br.com.biblioteca.domain.auth;

import br.com.biblioteca.domain.usuario.Usuario;
import br.com.biblioteca.exception.TokenGenerationException;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

	@Value("${jwt-secret}")
	private String secret;

	public String generateToken(Usuario usuario) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			return JWT.create()
				.withIssuer("biblioteca")
				.withSubject(usuario.getUsername())
				.withClaim("type", "token")
				.withExpiresAt(expiration(30))
				.sign(algorithm);
		} catch (JWTCreationException exception) {
			throw new TokenGenerationException("Erro ao gerar o token.");
		}
	}

	public String generateRefreshToken(Usuario usuario) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			return JWT.create()
				.withIssuer("biblioteca")
				.withSubject(usuario.getId().toString())
				.withClaim("type", "refresh-token")
				.withExpiresAt(expiration(120))
				.sign(algorithm);
		} catch (JWTCreationException exception) {
			throw new TokenGenerationException("Erro ao gerar o token.");
		}
	}


	public String verifyToken(String token) {
		DecodedJWT decodedJWT = decode(token);
		validateType(decodedJWT, "token");
		return decodedJWT.getSubject();
	}

	public String verifyRefreshToken(String token) {
		DecodedJWT decodedJWT = decode(token);
		validateType(decodedJWT, "refresh-token");
		return decodedJWT.getSubject();
	}

	private DecodedJWT decode(String token) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);
			JWTVerifier verifier = JWT.require(algorithm)
				.withIssuer("biblioteca")
				.build();
			return verifier.verify(token);
		} catch (JWTVerificationException exception) {
			throw new TokenGenerationException("Token JWT inválido.");
		}
	}

	private void validateType(DecodedJWT decodedJWT, String expectedType) {
		String type = decodedJWT.getClaim("type").asString();
		if (!expectedType.equals(type)) {
			throw new TokenGenerationException("Token JWT inválido.");
		}
	}

	private Instant expiration(Integer tokenExpirationTime) {
		return LocalDateTime.now()
			.plusMinutes(tokenExpirationTime)
			.toInstant(ZoneOffset.of("-03:00"));
	}
}
