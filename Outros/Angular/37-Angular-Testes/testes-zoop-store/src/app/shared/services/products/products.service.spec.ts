import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateProductApiService } from '../../../pages/manage-products/create-product/services/create-product-api.service';
import { ProductsApiService } from './products-api.service';
import { Observable, of } from 'rxjs';
import { Product } from '../../../types/product.inteface';
import { StorageService } from '../storage/storage.service';

class ProductsApiServiceMock {
  getAllProducts(): Observable<Product[]> {
    return of([
      { id: 1, title: 'IPhone', category: 'electronic', description: 'Smartphone', image: '', price: '2000', },
      { id: 2, title: 'IPheone', category: "women's clothes", description: 'Smaretphone', image: '', price: '2000', },
    ])
  }
}

class StorageServiceMock {
  private data: { [key: string]: any } = {};
  
  getAll(): any[] {
    return Object.values(this.data);
  }

  setValue(key: string, value: any): void {
    this.data[key] = value;
  }

  remove(key: string): void {
    delete this.data[key];
  }
}

const productsStorage: Product[] = [
  { id: 3, title: 'Produto C', category: 'electronic', description: 'Smartphone', image: '', price: '4000', },
  { id: 4, title: 'Produto D', category: "women's clothes", description: 'Smaretphone', image: '', price: '5000', },
]

fdescribe('ProductsService', () => {
  let service: ProductsService;
  let sessionStorage = new StorageServiceMock();


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ProductsService,
        CreateProductApiService,
        { provide: ProductsApiService, useClass: ProductsApiServiceMock },
        { provide: StorageService, useClass: StorageServiceMock }
      ]
    });

    sessionStorage.setValue('products', productsStorage);
    TestBed.overrideProvider(StorageService, { useValue: sessionStorage })
    service = TestBed.inject(ProductsService);
  });

  it('deve inicializar os produtos com os dados do Storage', () => {
    const products = service.products().flat();
    expect(products[0]).toEqual(productsStorage[0]);
    expect(products[1]).toEqual(productsStorage[1]);
  });
  
});
