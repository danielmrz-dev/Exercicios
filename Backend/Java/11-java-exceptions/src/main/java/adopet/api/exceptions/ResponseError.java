package adopet.api.exceptions;
import org.springframework.http.HttpStatus;
import java.time.LocalDateTime;

public record ResponseError(
  String message,
  Integer statusCode,
  LocalDateTime date
) {}
