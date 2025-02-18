package fundamentos;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

public class EstruturasDeDados {
    public static void main(String[] args) {
        List<String> nomes = new ArrayList<>();
        List<Integer> numeros = new ArrayList<>();
        List<Boolean> booleanos = new ArrayList<>();
        HashMap<String, Integer> pessoa = new HashMap<>();
        HashSet<Integer> idades = new HashSet<>();

        nomes.add("Daniel");
        nomes.add("Ana");

        numeros.add(5);
        numeros.add(3);

        pessoa.put("nome", 23);
        pessoa.remove("nome");
        idades.add(50);

        for (String nome : nomes) {
            System.out.println("O nome deste usuário é " + nome + ".");
        }

        System.out.println(numeros);
        System.out.println(pessoa);
        System.out.println(idades);
    }
}
