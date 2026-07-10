package med.voll.api.exception;

import java.time.LocalDateTime;
import java.util.List;

public record FieldValidationErrorResponse(
  String error,
  Integer statusCode,
  LocalDateTime date,
  List<FieldValidationErrorMessage> errors
) {
}
