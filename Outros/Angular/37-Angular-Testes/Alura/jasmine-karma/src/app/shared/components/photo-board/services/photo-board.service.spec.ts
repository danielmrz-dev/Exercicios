import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

const mockData = {
  api: 'http://localhost:3000/photos',
  description: [
    { id: 1, description: 'exemplo 1', src: '', alt: '' },
    { id: 2, description: 'exemplo 2', src: '', alt: '' },
  ]
}

describe('PhotoBoardService', () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;
  let prot = PhotoBoardService.prototype;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  describe(`Method => ${prot.getPhotos.name}()`, () => {
    it(`should return photos with description in uppercase`, (done) => {
      service.getPhotos().subscribe((photos) => {
        expect(photos[0].description).toBe("exemplo 1")
        expect(photos[1].description).toBe("exemplo 2")
        done();
      })
      httpController.expectOne(mockData.api).flush(mockData.description);

    });
  });

});
