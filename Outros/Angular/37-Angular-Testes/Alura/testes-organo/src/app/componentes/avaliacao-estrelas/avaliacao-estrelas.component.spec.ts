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

    it('deveria chamar o método onChange quando o método classificar for chamado', () => {
        const onChangeSpy = jest.spyOn(component, 'onChange');
        const classificacao = 4;
        component.classificar(classificacao);
        expect(onChangeSpy).toHaveBeenCalled();
    });

    it('deveria chamar o método onTouched quando o método classificar for chamado', () => {
        const onTouchedSpy = jest.spyOn(component, 'onTouched');
        component.classificar(2);
        expect(onTouchedSpy).toHaveBeenCalled();
    });

    it('não deveria atualizar a classificação quando a propriedade readonly for true', () => {
        const onChangeSpy = jest.spyOn(component, 'onChange');
        component.readOnly = true;
        component.classificar(5);
        expect(onChangeSpy).not.toHaveBeenCalled();
        expect(component.classificacao).not.toBe(5);
    });

    it('deveria ignorar valores inválidos e atribuir o valor 1 à classificação', () => {
        const valoresInvalidos = [0, 'abc', -4, undefined];
        valoresInvalidos.forEach((valor) => {
            component.writeValue(valor as any);
            expect(component.classificacao).toBe(1);
        })

    });

    it('deveria atualizar o DOM quando a classificação muda', () => {
        const classificacao = 3;
        component.classificar(classificacao);
        const estrelaPreenchida = fixture.nativeElement.querySelector('.filled');
        expect(estrelaPreenchida).toBeTruthy();
    });
    
    
    
    
    
    
    
});
