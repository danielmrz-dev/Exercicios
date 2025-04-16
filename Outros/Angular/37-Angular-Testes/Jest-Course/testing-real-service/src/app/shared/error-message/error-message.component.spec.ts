import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;
  let debugEl: DebugElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorMessageComponent]
    });

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  })

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render default ', () => {
    const el = debugEl.query(By.css('[data-testId="message"]'))
    expect(el.nativeElement.textContent).toEqual("Something went wrong!");
  });

  it('should render custom error message', () => {
    component.message = 'Email already taken!';
    fixture.detectChanges();
    expect(debugEl.nativeElement.textContent).toEqual('Email already taken!');
  });
  
  
});
