import java.util.ArrayList;
import java.util.List;

public class EstruturasDeDados {
    public static void main(String[] args) {
        List<String> nomes = new ArrayList<>();

        nomes.add("Daniel");
        nomes.add("Ana");

        System.out.println("Nome no index 1: " + nomes.get(1));

        nomes.forEach(nome -> System.out.println(nome));

        for (String nome : nomes) {
            System.out.println("O nome atual é " + nome);
        }

    }
}
