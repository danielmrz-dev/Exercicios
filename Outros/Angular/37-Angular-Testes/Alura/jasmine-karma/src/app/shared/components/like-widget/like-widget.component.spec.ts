import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(`Componente ${LikeWidgetComponent.name}`, () => {
  const prot = LikeWidgetComponent.prototype;
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Input Properties =>', () => {
    it('should auto generate id during ngOnInit when (@Input id) property is not provided', () => {
      expect(component.id).toBeTruthy();
    });
  
    it('should NOT generate id when (@Input id) property is provided', () => {
      component.id = 'someId';
      fixture.detectChanges();
      expect(component.id).toBe('someId');
    });    
  });

  describe(`Method => ${prot.like.name}()`, () => {
    it('should trigger (@Output liked) when called', () => {
      const likeSpy = spyOn(component.liked, "emit");
      component.like();
      expect(likeSpy).toHaveBeenCalled();
    });
  });

  describe('(DOM)', () => {
    it('should display number of likes when clicked', (done) => {
      component.liked.subscribe(() => {
        component.likes++;
        done();
      });
      const clickedEl = debugEl.query(By.css(".like-widget-container"));
      const element: HTMLElement = debugEl.nativeElement.querySelector("[data-testId='likes']");
      clickedEl.triggerEventHandler('click');
      fixture.detectChanges();
      expect(element.textContent).toBe("1");
    });

    it('should display number of likes when ENTER key is pressed', () => {
      component.liked.subscribe(() => {
        component.likes++;
        fixture.detectChanges();
        const counterEl: HTMLElement = debugEl.nativeElement.querySelector("[data-testId='likes']");
        expect(counterEl.textContent).toBe("1");
      });
      const widgetContainer = debugEl.nativeElement.querySelector(".like-widget-container");
      const event = new KeyboardEvent('keyup', { key: "Enter" });
      widgetContainer.dispatchEvent(event);
    });
  });
  
});
