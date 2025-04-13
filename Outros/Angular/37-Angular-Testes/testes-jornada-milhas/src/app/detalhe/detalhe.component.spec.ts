import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheComponent } from './detalhe.component';
import { SharedModule } from '@shared/shared.module';
import { DepoimentosModule } from '../home/depoimentos/depoimentos.module';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetalheComponent', () => {
  let component: DetalheComponent;
  let fixture: ComponentFixture<DetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheComponent],
      imports: [
        SharedModule,
        DepoimentosModule,
        CommonModule,
        HttpClientTestingModule
      ]
    });
    fixture = TestBed.createComponent(DetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deveria exibir o título principal corretamente', () => {
    const elemento = fixture.nativeElement;
    expect(elemento.querySelector('h1.main-title').textContent).toContain('Atravesse o deserto no Chile');
  });

  
  
});
