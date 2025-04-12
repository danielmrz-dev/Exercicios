import { CabecalhoComponent } from "./cabecalho.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Description', () => {
    let component: CabecalhoComponent;
    let fixture: ComponentFixture<CabecalhoComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CabecalhoComponent],
        })
        fixture = TestBed.createComponent(CabecalhoComponent);
        component = fixture.componentInstance;
    });
    

    it('deve ser criado', () => {
        expect(component).toBeTruthy();
    });

    it('deveria definir as propriedades alt e src', () => {
        expect(component.alt).toBeDefined();
        expect(component.src).toBeDefined();
    });

    it('deveria renderizar o conteúdo baseado nas propriedades src e alt', () => {
        component.src = "https://example.com/test-image.jpg";
        component.alt = "Teste";
        expect(component).toMatchSnapshot();
    });
    
    
});