import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Product } from '../../../types/product.inteface';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

fdescribe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardComponent);
    debugEl = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o produto no template', () => {
    const product: Product = {
      id: 1,
      title: 'IPhone',
      category: 'Eletrônico',
      description: 'Smartphone',
      image: 'src/assets/image.png',
      price: '1000',
    }

    component.product = product;
    fixture.detectChanges();

    const productImg = debugEl.query(By.css('img')).nativeElement;
    const productTitle = debugEl.query(By.css('h2')).nativeElement;
    const productDescription = debugEl.query(By.css('p')).nativeElement;
    const productPrice = debugEl.query(By.css('h3')).nativeElement;

    expect(productImg.src).toContain(product.image);
    expect(productTitle.textContent).toContain(product.title);
    expect(productDescription.textContent).toContain(product.description);
    expect(productPrice.textContent).toContain(product.price);
  });

  it('deveria emitir o evento OnDelete quando clicar no delete', () => {
    const product: Product = {
      id: 2,
      title: 'Samsung4',
      category: 'eletronico',
      description: 'Smartphone',
      image: 'src/assets/image.png',
      price: '800',
    }

    component.product = product;
    fixture.detectChanges();

    const onDeleteSpy = spyOn(component.onDelete, 'emit');
    component.isManagable = true;
    fixture.detectChanges();
    const manageableElement = debugEl.query(By.css('span')).nativeElement;
    expect(manageableElement).not.toBeNull();

    component.onDeleteClick();
    expect(onDeleteSpy).toHaveBeenCalledWith(product);
    
  });

  it('deveria emitir o evento OnEdit quando clicar no Edit', () => {
    const product: Product = {
      id: 2,
      title: 'Samsung4',
      category: 'eletronico',
      description: 'Smartphone',
      image: 'src/assets/image.png',
      price: '800',
    }

    component.product = product;
    fixture.detectChanges();

    const onEditSpy = spyOn(component.onEdit, 'emit');
    component.isManagable = true;
    fixture.detectChanges();
    const manageableElement = debugEl.query(By.css('span')).nativeElement;
    expect(manageableElement).not.toBeNull();

    component.onEditClick();
    expect(onEditSpy).toHaveBeenCalledWith(product);
    
  });
  
  
});
