package mrz.dev.screensound.principal;

import mrz.dev.screensound.model.Artista;
import mrz.dev.screensound.model.Musica;
import mrz.dev.screensound.model.TipoArtista;
import mrz.dev.screensound.repository.ArtistaRepository;

import java.util.List;
import java.util.Optional;
import java.util.Scanner;

public class Principal {

    private final ArtistaRepository repositorio;
    private Scanner leitura = new Scanner(System.in);

    public Principal(ArtistaRepository repositorio) {
        this.repositorio = repositorio;
    }

    public void exibeMenu() {
        var opcao = -1;
        while(opcao != 9) {
            var menu = """
                    *** ScreenSound Músicas ***
                    
                    1 - Cadastrar artistas
                    2 - Cadastrar músicas
                    3 - Listar músicas
                    4 - Buscar músicas por artista
                    5 - Pesquisar dados sobre um artista
                    
                    9 - Sair
                    """;

            System.out.println(menu);
            opcao = leitura.nextInt();
            leitura.nextLine();

            switch (opcao) {
                case 1:
                    cadastrarArtistas();
                    break;
                case 2:
                    cadastrarMusicas();
                    break;
                case 3:
                    listarMusicas();
                    break;
                case 4:
                    buscarMusicasPorArtista();
                    break;
                case 5:
                    pesquisarDadosDoArtista();
                    break;
                case 9:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida");
            }
        }
    }

    private void cadastrarArtistas() {
        var cadastrarNovo = "s";
        while(cadastrarNovo.equalsIgnoreCase("s")) {
            System.out.println("Qual o nome do artista?");
            var nome = leitura.nextLine();
            System.out.println("Qual o tipo do artista? (solo, dupla ou banda)");
            var tipo = leitura.nextLine();
            TipoArtista tipoArtista = TipoArtista.valueOf(tipo.toUpperCase());
            Artista artista = new Artista(nome, tipoArtista);
            repositorio.save(artista);
            System.out.println("Gostaria de cadastrar um novo artista? (S/N)");
            cadastrarNovo = leitura.nextLine();
        }
    }

    private void cadastrarMusicas() {
        System.out.println("Essa música é de qual artista?");
        var nome = leitura.nextLine();
        Optional<Artista> artista = repositorio.findByNomeContainingIgnoreCase(nome);

        if (artista.isPresent()) {
            System.out.println("Qual o título da música? ");
            var nomeMusica = leitura.nextLine();
            Musica musica = new Musica(nomeMusica);
            musica.setArtista(artista.get());
            artista.get().getMusicas().add(musica);
            repositorio.save(artista.get());
        } else {
            System.out.println("Artista não encontrado!");
        }
    }

    private void listarMusicas() {
        List<Artista> artistas = repositorio.findAll();
        artistas.forEach(a -> a.getMusicas().forEach(System.out::println));
    }

    private void pesquisarDadosDoArtista() {}

//    private void buscarMusicasPorArtista() {
//        System.out.println("Digite o nome do artista:");
//        var nomeArtista = leitura.nextLine();
//        Artista artistaEncontrado = repositorio.findArtistaByNome(nomeArtista);
//
//        if (artistaEncontrado != null) {
//            var musicas = artistaEncontrado.getMusicas();
//            musicas.forEach(System.out::println);
//        } else {
//            System.out.println("Artista não encontrado!");
//        }
//    }

    private void buscarMusicasPorArtista() {
        System.out.println("Digite o nome do artista:");
        var nomeArtista = leitura.nextLine();
        List<Musica> musicas = repositorio.buscaMusicasPorArtista(nomeArtista);
        musicas.forEach(System.out::println);
    }



}
