import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateProductApiService } from '../../../pages/manage-products/create-product/services/create-product-api.service';
import { ProductsApiService } from './products-api.service';

fdescribe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ProductsService,
        ProductsApiService,
        CreateProductApiService
      ]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
