import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AvaliacaoEstrelasComponent } from "./avaliacao-estrelas.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { forwardRef } from "@angular/core";

describe('AvaliaçãoEstrelas', () => {

    let component: AvaliacaoEstrelasComponent;
    let fixture: ComponentFixture<AvaliacaoEstrelasComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AvaliacaoEstrelasComponent],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
                    multi: true
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AvaliacaoEstrelasComponent);
        component = fixture.componentInstance;
        component.readOnly = false;
        fixture.detectChanges();
    });
    

    it('deveria criar componente', () => {
        expect(component).toBeTruthy();
    });

    it('deveria atribuir um valor para a classificação quando o método writeValue for chamado', () => {
        const classificacao = 3;
        component.writeValue(classificacao);
        expect(component.classificacao).toBe(3);

    });
    
});
