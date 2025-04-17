import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;
  const prot = UniqueIdService.prototype;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  describe(`Method => ${prot.generateUniqueIdWithPrefix.name}()`, () => {
    
    it(`should generate id when called with prefix`, () => {
      const id = service.generateUniqueIdWithPrefix('app');
      expect(id.startsWith('app-')).toBeTrue();
    });    

    it('should not generate duplicated ids when called multiple times', () => {
      const generatedIds = new Set();
      for (let i = 0; i < 50; i++) {
        const id = service.generateUniqueIdWithPrefix('app');
        generatedIds.add(id);
      }
      expect(generatedIds.size).toEqual(50);
    });

    it('should throw an error when called without a prefix', () => {
      expect(() => service.generateUniqueIdWithPrefix('')).toThrowError();
    });

    it('should throw an error when called with an invalid prefix', () => {
      const invalidPrefixes: string[] = ["123", "@ndxsa", "#dnss", "!sdi3", "0", "[]s"];
      invalidPrefixes.forEach((prefix) => {
        expect(() => service.generateUniqueIdWithPrefix(prefix)).withContext(`Valid prefix: ${prefix}`).toThrowError();
      })
    });
    
    

  });
  
  describe(`Method => ${prot.getNumberOfGeneratedUniqueIds.name}()`, () => {
    it('should return the number of generated ids when called', () => {
      for (let i = 0; i < 50; i++) {
        service.generateUniqueIdWithPrefix('app-');
      }
      const numberOfGeneratedIds = service.getNumberOfGeneratedUniqueIds();
      expect(numberOfGeneratedIds).toBe(50);
    });
  });
  
});
