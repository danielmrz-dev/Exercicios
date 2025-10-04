import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagFeed } from './tag-feed';

describe('TagFeed', () => {
  let component: TagFeed;
  let fixture: ComponentFixture<TagFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagFeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagFeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
