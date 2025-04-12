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
});
