import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { DebugElement } from '@angular/core';

describe(`Componente => ${PhotoFrameComponent.name}`, () => {
  let prot = PhotoFrameComponent.prototype;
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhotoFrameComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  })

  it('should display number of likes when property (@Input likes) is incremented', () => {
    component.likes++;
    fixture.detectChanges();
    const elemento: HTMLElement = debugEl.nativeElement.querySelector('[data-testId="likes"]');
    expect(elemento.textContent).toBe('1');
  });

  it('should update aria-label when (@Input likes) is updated', () => {
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = debugEl.nativeElement.querySelector("span");
    expect(element.getAttribute('aria-label')).toBeNull();
  });

  it('should display image and src with description when bound to properties ', () => {
    const description = 'Some description';
    const src = 'http://somesite.com/image.jpg';
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img: HTMLImageElement = debugEl.nativeElement.querySelector("img");
    expect(img.getAttribute("src")).toBe(src);
    expect(img.getAttribute("alt")).toBe(description);
  });

  describe('Input Properties', () => {
    it('should initialize with empty string', () => {
      expect(component.description).toEqual('');
      expect(component.src).toEqual('');
      expect(component.likes).toEqual(0);
    });

    it('should receive new value from parent component', () => {
      component.description = 'Descrição';
      component.src = 'image path';
      component.likes = 2;
      expect(component.description).toEqual('Descrição');
      expect(component.src).toEqual('image path');
      expect(component.likes).toEqual(2);
    });


  });
  
  describe(`Method => ${prot.like.name}()`, () => {
    it('should trigger (@Output liked) once when called multiple times within debounce time', 
      fakeAsync(() =>{
        let times = 0;
        component.liked.subscribe(() => times++);
        component.like();
        component.like();
        tick(500);
        expect(times).toBe(1);
      })
    );
      
    it('should trigger (@Output liked) two times when called after debounce time', 
      fakeAsync(() => {
        let times = 0;
        component.liked.subscribe(() => times++);
        component.like();
        tick(500);
        component.like();
        tick(500);
        expect(times).toBe(2);
      })
    );
    
  });
  
  
});
