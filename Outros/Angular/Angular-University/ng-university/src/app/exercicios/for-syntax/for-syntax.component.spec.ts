import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSyntaxComponent } from './for-syntax.component';

describe('ForSyntaxComponent', () => {
  let component: ForSyntaxComponent;
  let fixture: ComponentFixture<ForSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForSyntaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
