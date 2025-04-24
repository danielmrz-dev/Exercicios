import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpObservableComponent } from './http-observable.component';

describe('HttpObservableComponent', () => {
  let component: HttpObservableComponent;
  let fixture: ComponentFixture<HttpObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpObservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
