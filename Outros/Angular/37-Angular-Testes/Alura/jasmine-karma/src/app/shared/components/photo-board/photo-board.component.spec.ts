import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardComponent } from './photo-board.component';
import { DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { buildPhotosList } from '../../../utils/build-photos-list';

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let debugEl: DebugElement;
  let prot = PhotoBoardComponent.prototype;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  })
  
  describe('should display rows and columns when (@Input photos) has value', () => {
    it('should create', () => {
      component.photos = buildPhotosList();
      const change: SimpleChanges = {
        photos: new SimpleChange([], component.photos, true)
      }
      component.ngOnChanges(change);
      fixture.detectChanges();
      expect(component.rows.length).withContext("Number of rows").toEqual(2);
      expect(component.rows[0].length).withContext("Number of columns on the first row").toEqual(4);
    });    
  });
  

  
});
