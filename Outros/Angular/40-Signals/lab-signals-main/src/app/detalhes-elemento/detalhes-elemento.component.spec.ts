import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesElementoComponent } from './detalhes-elemento.component';

describe('DetalhesElementoComponent', () => {
  let component: DetalhesElementoComponent;
  let fixture: ComponentFixture<DetalhesElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesElementoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
