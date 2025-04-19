import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { buildPhotosList } from '../../../../utils/build-photos-list';
import { Photo } from '../photo.interface';

const mockData = {
  api: 'http://localhost:3000/photos',
  description: [
    { id: 1, description: 'exemplo 1', src: '', alt: '' },
    { id: 2, description: 'exemplo 2', src: '', alt: '' },
  ]
}

fdescribe('PhotoBoardService => Mock Provider', () => {
  let httpController: HttpTestingController;
  let prot = PhotoBoardService.prototype;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { 
          provide: PhotoBoardService, 
          useValue: { 
            getPhotos(): Observable<Photo[]> { 
              return of(buildPhotosList()) 
            }
          } 
        }
      ]
    }).compileComponents();

    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should display board when data arrives', () => {
    
  });
  

});
