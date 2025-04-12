import { GeneroLiterario, Livro } from "../componentes/livro/livro";
import { livros } from "../mock-livros";
import { ErroGeneroLiterario, LivroService } from "./livro.service"

describe('LivroService', () => {

    let service: LivroService;
    beforeEach(() => {
        service = new LivroService();
    })

    it('deve ser criado', () => {
        expect(service).toBeTruthy();
    })

    it('deve adicionar um novo livro', () => {
        const novoLivro: Livro = {
            titulo: 'Novo Livro',
            autoria: 'Autor Desconhecido',
            imagem: 'Teste',
            genero: { id: 'romance', value: 'Romance' },
            dataLeitura: '2025-04-11',
            classificacao: 5,
        }
        service.adicionarLivro(novoLivro);
        const livrosPorGenero = service.obterLivrosPorGenero('romance');
        expect(livrosPorGenero).toContain(novoLivro);
    })

    it('deve recuperar corretamente os livros por gênero', () => {
        const livrosPorGenero = service.obterLivrosPorGenero('romance');
        const livrosEsperados = livros.filter(livro => livro.genero.id === 'romance');
        expect(livrosPorGenero).toEqual(livrosEsperados);
    })

    it('deve inicializar os gêneros corretamente', () => {
        const generos: GeneroLiterario[] = [
            { id: 'romance', value: 'Romance' },
            { id: 'misterio', value: 'Mistério' },
            { id: 'fantasia', value: 'Fantasia' },
            { id: 'ficcao-cientifica', value: 'Ficção Científica' },
            { id: 'tecnicos', value: 'Técnicos' },
        ];

        expect(service.generos).toEqual(generos);
    })

    it('deve lançar um erro ao tentar cadastrar livros com gênero desconhecido', () => {
        const novoLivro: Livro = {
            titulo: 'Novo Livro',
            autoria: 'Autor Desconhecido',
            imagem: 'Teste',
            genero: { id: 'no existe', value: 'no existe' },
            dataLeitura: '2025-04-11',
            classificacao: 5,
        }

        expect(() => {
            service.adicionarLivro(novoLivro)
        }).toThrow(ErroGeneroLiterario)
    })
})