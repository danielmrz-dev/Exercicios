import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedToggler } from './feed-toggler';

describe('FeedToggler', () => {
  let component: FeedToggler;
  let fixture: ComponentFixture<FeedToggler>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedToggler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedToggler);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
