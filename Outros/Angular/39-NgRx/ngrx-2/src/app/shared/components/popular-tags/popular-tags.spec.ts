import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTags } from './popular-tags';

describe('PopularTags', () => {
  let component: PopularTags;
  let fixture: ComponentFixture<PopularTags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularTags]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTags);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
