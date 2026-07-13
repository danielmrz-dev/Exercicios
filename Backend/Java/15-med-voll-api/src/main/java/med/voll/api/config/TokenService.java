package med.voll.api.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import med.voll.api.domain.usuario.Usuario;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

  @Value("${api.security.token.secret}")
  private String secret;

  public String generateToken(Usuario usuario) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(secret);
      return JWT.create()
        .withIssuer("API VOLLMED")
        .withSubject(usuario.getLogin())
        .withClaim("id", usuario.getId())
        .withExpiresAt(LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00")))
        .sign(algorithm);
    } catch (JWTCreationException e) {
      throw new RuntimeException("Erro na criação do token JWT", e);
    }
  }

  public String getSubject(String token) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(secret);
      return JWT.require(algorithm)
        .withIssuer("API VOLLMED")
        .build()
        .verify(token)
        .getSubject();
    } catch (JWTCreationException e) {
      throw new RuntimeException("Token inválido ou expirado.", e);
    }
  }
}
