import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { DebugElement } from '@angular/core';

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
});
