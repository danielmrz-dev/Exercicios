package fundamentos;

public class PrimeiraClasse {

    public static void main(String[] args) {
        // System.out.println("Chegamo galera!");

        //Tipos
        int inteiro = 10;
        double duplo = 10.5;
        float flutuante = 10.5f;
        long longo = 1084613156L;
        boolean booleano = true;
        String texto = "10";

        // if-else
        if (inteiro < duplo) {
            System.out.println("Duplo é maior!");
        } else {
            System.out.println("Inteiro é maior!");            
        }

        // While
        while (inteiro < 20) {
            System.out.println(inteiro);
            inteiro++;
        }

        // For 
        for(int numero = 10; numero < 20; numero = numero + 2) {
            System.out.println("O valor atual é " + numero + ".");
        }
    }
}
