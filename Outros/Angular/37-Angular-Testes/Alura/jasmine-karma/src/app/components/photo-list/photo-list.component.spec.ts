import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PhotoListComponent } from './photo-list.component';
import { provideHttpClient } from '@angular/common/http';
import { PhotoBoardService } from '../../shared/components/photo-board/services/photo-board.service';
import { buildPhotosList } from '../../utils/build-photos-list';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let service: PhotoBoardService;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListComponent,
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    service = TestBed.inject(PhotoBoardService);
    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('(DOM) should display board when data arrives', () => {
  //   const photos = buildPhotosList();
  //   spyOn(service, 'getPhotos').and.returnValue(of(photos));
  //   fixture.detectChanges();
  //   const board = debugEl.nativeElement.querySelector("app-photo-board");
  //   const loader = debugEl.nativeElement.querySelector(".loader");
  //   console.log(photos);
  //   console.log(board);
  //   console.log(loader);
    
  //   expect(board).not.toBeNull();
  //   expect(loader).toBeNull();
  // });
  
});
