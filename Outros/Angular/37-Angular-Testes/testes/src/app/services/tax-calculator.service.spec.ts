import { TestBed } from '@angular/core/testing';

import { COUNTRIES, Countries as Countries, TaxCalculatorService } from './tax-calculator.service';

describe('TaxCalculatorService', () => {

  let service: TaxCalculatorService;
  let testCountries: Countries;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: COUNTRIES,
          useValue: { ua: { name: 'Ukraine', vat: 20 } }
        }
      ]
    })
    service = TestBed.inject(TaxCalculatorService);
  })

  describe('Calculator Service Error Handling', () => {

    it('should throw an error if the country is not supported', () => {
      expect(() => service.calculateVAT(100, 'ru')).toThrowError(/isn't supported/)
    });

    it('should throw an error if the price is a negative number', () => {
      expect(() => service.calculateVAT(-100, 'ua')).toThrowError(/negative number/);
    });

    it('should return 0 if the isB2B flag is true', () => {
      const result = service.calculateVAT(100, 'ua', true)
      expect(result).toBe(0);
    });

    it('should properly calculate VAT for a given country', () => {
      const result = service.calculateVAT(100, 'ua')
      expect(result).toBe(20);
    });



  })

});
