import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleComponent } from './throttle.component';

describe('ThrottleComponent', () => {
  let component: ThrottleComponent;
  let fixture: ComponentFixture<ThrottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThrottleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
