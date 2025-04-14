import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProductComponent } from './create-product.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProductService } from './services/create-product.service';
import { CreateProductApiService } from './services/create-product-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { Product } from '../../../types/product.inteface';

class CategoriesMock {
  getCategories(): Observable<string[]> {
    return of(["electronics", "jewelry", "men's clothing", "women's clothing"]);
  }
}

const dialogRefMock = {
  close: jasmine.createSpy('close')
}

const productMock: Product = {
  id: 1,
  title: 'IPhone',
  category: 'Eletrônico',
  description: 'Smartphone',
  image: '',
  price: '1000',
}

fdescribe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CreateProductComponent,
        ReactiveFormsModule,
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: CreateProductApiService, useClass: CategoriesMock },
        { provide: MatDialogRef, useValue: dialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: null },
        CreateProductService,
        CreateProductApiService,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve listar as categorias', () => {
    const categories = ["electronics", "jewelry", "men's clothing", "women's clothing"];
    const categoriesMockService = new CategoriesMock();
    categoriesMockService.getCategories().subscribe((response) => {
      expect(categories).toEqual(response);
    })
  });

  it('deve verificar se o formulário está preenchido com as informações do produto', () => {
    component.formGroup.setValue({ 
      id: productMock.id,
      title: productMock.title,
      category: productMock.category,
      description: productMock.description,
      image: productMock.image,
      price: productMock.price,
    })
    expect(component.formGroup.get('id')?.value).toEqual(productMock.id);
    expect(component.formGroup.get('title')?.value).toEqual(productMock.title);
    expect(component.formGroup.get('category')?.value).toEqual(productMock.category);
    expect(component.formGroup.get('description')?.value).toEqual(productMock.description);
    expect(component.formGroup.get('image')?.value).toEqual(productMock.image);
    expect(component.formGroup.get('price')?.value).toEqual(productMock.price);
    
  });

  it('deve chamar o método close ao clicar em cancelar', () => {
    component.onCancelClick();
    expect(dialogRefMock.close).toHaveBeenCalled();
  });
  
  
});
