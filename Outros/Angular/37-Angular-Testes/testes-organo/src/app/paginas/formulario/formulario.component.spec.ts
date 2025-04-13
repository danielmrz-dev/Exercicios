import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormularioComponent } from "./formulario.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { provideRouter } from "@angular/router";
import { LivroService } from "../../services/livro.service";

describe('FormulárioComponent', () => {

    let component: FormularioComponent;
    let fixture: ComponentFixture<FormularioComponent>;
    let livroService: LivroService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormularioComponent, ReactiveFormsModule],
            providers: [LivroService, FormBuilder, provideRouter([])],
        });

        livroService = TestBed.inject(LivroService);
        fixture = TestBed.createComponent(FormularioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    

    it('deveria inicializar o formulario com os valores vazios', () => {
        expect(component.formulario.value).toEqual({
            titulo: '',
            autoria: '',
            imagem: '',
            genero: '',
            dataLeitura: '',
            classificacao: null,
        });
    });

    it('deveria adicionar um livro novo e resetar o formulario', () => {
        const novoLivro = {
            titulo: 'Dados',
            autoria: 'Arbitrários',
            imagem: 'https://example.com',
            genero: 'romance',
            dataLeitura: '2025-04-12',
            classificacao: 3,
        }

        const adicionarLivroSpy = jest.spyOn(livroService, 'adicionarLivro');
        const routerSpy = jest.spyOn(component['router'], 'navigate');
        component.formulario.setValue(novoLivro);
        component.adicionarLivro();
        expect(adicionarLivroSpy).toHaveBeenCalledWith({
            ...novoLivro,
            genero: component.generos.find(g => g.id === novoLivro.genero)
        })
        expect(component.formulario.value).toEqual({
            titulo: null,
            autoria: null,
            imagem: null,
            genero: null,
            dataLeitura: null,
            classificacao: null,
        })
        expect(routerSpy).toHaveBeenCalledWith(['lista-livros']);
    });
    
});
