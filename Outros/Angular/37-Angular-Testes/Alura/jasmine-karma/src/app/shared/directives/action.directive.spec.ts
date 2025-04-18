import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;
  let debugEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent],
      imports: [
        ActionDirective,
      ]
    });
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });

  it('(D) (@Output appAction) should emit event with payload when ENTER key is pressed', () => {
    const el: HTMLElement = debugEl.nativeElement.querySelector("[data-testId='dummy']");
    const event = new KeyboardEvent('keyup', { key: "Enter" });
    el.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });

  fit('(D) (@Output appAction) should emit event with payload when clicked', () => {
    const el = debugEl.query(By.css("[data-testId='dummy']"));
    el.triggerEventHandler("click", new MouseEvent("click"));
    fixture.detectChanges();
    expect(component.hasEvent()).toBe(true);
  });
  

});

@Component({
  selector: 'dummy',
  template: `
    <div
      data-testId="dummy"
      (appAction)="actionHandler($event)">
    </div>
  `
})
class DummyComponent {

  private event: Event = {} as Event;

  actionHandler(event: Event): void {
    this.event = event;
  }

  hasEvent(): boolean {
    return !!this.event;
  }
}
