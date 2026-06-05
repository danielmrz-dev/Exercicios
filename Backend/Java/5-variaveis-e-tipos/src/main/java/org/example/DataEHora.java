package org.example;

import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class DataEHora {
  public static void main(String[] args) {
    LocalDateTime dataCompra = LocalDateTime.now();
    LocalDateTime dataPrimeiraParcela = LocalDateTime.of(LocalDate.of(2026,5,5), LocalTime.of(18,30,30));
    LocalDateTime dataSegundaParcela = dataPrimeiraParcela.plusDays(30);

    if (dataPrimeiraParcela.isEqual(LocalDateTime.now())) {
      System.out.println("Hoje é o dia do vencimento!");
    } else {
      System.out.println("Ainda não é o dia do vencimento!");
    }


    DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd 'de' MMMM 'de' yyyy 'às' hh:mm");

//    System.out.println("Data de compra: " + dataCompra.format(formatador));
//    System.out.println("Data da primeira parcela: " + dataPrimeiraParcela.format(formatador));
//    System.out.println("Data da segunda parcela: " + dataSegundaParcela.format(formatador));

    ZonedDateTime dataConclusaoCompra = ZonedDateTime.now();
//    System.out.println("Conclusão: " + dataConclusaoCompra);
    ZonedDateTime dataConclusaoCompraEmNY = dataConclusaoCompra.withZoneSameInstant(ZoneId.of("America/New_York"));
//    System.out.println("Conclusão NY: " + dataConclusaoCompraEmNY);

    LocalTime inicio = LocalTime.of(9, 0);
    LocalTime fim = LocalTime.of(18, 12);

    Duration expediente = Duration.between(inicio, fim);
    System.out.println("O expediente dura: " + expediente.toHours() + " horas e " + expediente.toMinutesPart() + " minutos.");

    LocalDate pagamento = LocalDate.parse("2025-10-30");

    long totalDias = ChronoUnit.DAYS.between(pagamento, LocalDate.now());

    System.out.println("Total de dias: " + totalDias);
  }
}
