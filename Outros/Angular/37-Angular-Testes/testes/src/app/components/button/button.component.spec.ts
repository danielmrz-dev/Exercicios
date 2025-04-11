import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BUTTON_CLASSES, ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

describe('ButtonComponent', () => {
  
  let fixture: ComponentFixture<ButtonComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    debugEl = fixture.debugElement;
    element = debugEl.nativeElement;
    fixture.detectChanges();
  })

  describe('Appearance state', () => {
    it('should verify if the button has the class "solid-button"', () => {
      expect(element.classList).toContain('solid-button'); 
    });

    it('should apply proper css classes when the appearance changes ', () => {
      fixture.componentInstance.appearance = 'stroked';
      fixture.detectChanges();
      expect(element.classList).toContain(BUTTON_CLASSES.stroked);
  
      fixture.componentInstance.appearance = 'solid';
      fixture.detectChanges();
      expect(element.classList).toContain(BUTTON_CLASSES.solid);
  
      fixture.componentInstance.appearance = 'dashed';
      fixture.detectChanges();
      expect(element.classList).toContain(BUTTON_CLASSES.dashed);
    });
  })

  describe('Loading state', () => {
    it('should show loading spinner when property "loading" is set to true', () => {
      
      fixture.componentRef.setInput('loading', true)
      fixture.detectChanges();
      let loader = debugEl.query(By.css('[data-testId="loader"]'));
      expect(loader).not.toBeNull();
      
      fixture.componentRef.setInput('loading', false)
      fixture.detectChanges();
      loader = debugEl.query(By.css('[data-testId="loader"]'));
      expect(loader).toBeNull();
  
    });
  })
  
  describe('Disabled state', () => {

    beforeEach(() => {
      fixture.componentRef.setInput('disabled', true);
      fixture.detectChanges();
    })

    it('Should apply necessary attributes to component host', () => {
      expect(element.classList).toContain('disabled')
      expect(element.getAttribute('disabled')).not.toBeNull();
      expect(element.getAttribute('tabindex')).toBe('-1');
    })

    it('Should prevent default behaviour', () => {
      const clickEvent = new PointerEvent('click', { cancelable: true })
      debugEl.triggerEventHandler('click', clickEvent);
      expect(clickEvent.defaultPrevented).toBe(true);
    })



  })

});

describe('ButtonComponent (with TestHost)', () => {
  it('should properly project content', () => {
    const { buttonDebugEl } = setup();
    const label = buttonDebugEl.query(By.css('[data-testId="label"]'))
    expect(label.nativeElement.innerText).toBe("Hello! I'm Test Host!");
  })
})

function setup() {
  @Component({
    template: `<button [loading]="loading" dfButton>
        Hello! I'm Test Host!
      </button>`
  })
  class ButtonTestHost {
    loading = false;
  }

  TestBed.configureTestingModule({
    imports: [ButtonComponent],
    declarations: [ButtonTestHost]
  });
  let fixture = TestBed.createComponent(ButtonTestHost);
  let buttonDebugEl = fixture.debugElement.query(By.directive(ButtonComponent));
  let buttonEl: HTMLElement = buttonDebugEl.nativeElement;
  let hostComponent = fixture.componentInstance;
  fixture.detectChanges();

  return { fixture, buttonDebugEl, buttonEl, hostComponent }
}