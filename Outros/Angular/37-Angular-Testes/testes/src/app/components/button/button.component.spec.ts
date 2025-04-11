import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUTTON_CLASSES, ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  
  let fixture: ComponentFixture<ButtonComponent>;
  let debugEl: DebugElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  })

  it('should verify if the button has the class "solid-button"', () => {
    expect(debugEl.nativeElement.classList).toContain('solid-button'); 
  });
  
  it('should apply proper css classes when the appearance changes ', () => {
    fixture.componentInstance.appearance = 'stroked';
    fixture.detectChanges();
    expect(debugEl.nativeElement.classList).toContain(BUTTON_CLASSES.stroked);

    fixture.componentInstance.appearance = 'solid';
    fixture.detectChanges();
    expect(debugEl.nativeElement.classList).toContain(BUTTON_CLASSES.solid);

    fixture.componentInstance.appearance = 'dashed';
    fixture.detectChanges();
    expect(debugEl.nativeElement.classList).toContain(BUTTON_CLASSES.dashed);
  });
  
  it('should show loading spinner when property "loading" is set to true', () => {
    
    fixture.componentInstance.loading = true;
    fixture.detectChanges();
    let loader = debugEl.query(By.css('.loader'));
    expect(loader).not.toBeNull();

    fixture.componentInstance.loading = false;
    fixture.detectChanges();
    loader = debugEl.query(By.css('.loader'));
    expect(loader).toBeNull();

  });
  


});
