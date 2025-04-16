import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TodosService } from '../../todos/services/todos.service';
import { FilterEnum } from '../../todos/types/filter.enum';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugEl: DebugElement;
  let todosService: TodosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FooterComponent,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    todosService = TestBed.inject(TodosService)
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Component visibility', () => {

    it('should be hidden when there is no todos', () => {
      const footer = debugEl.query(By.css('[data-testid="footer"]'));
      expect(footer.classes['hidden']).toEqual(true);
    });
    
    it('should be visible if there are todos', () => {
      todosService.todosSig.set([{ id: '1', text: 'foo', isCompleted: false }]);
      fixture.detectChanges();
      const footer = debugEl.query(By.css('[data-testid="footer"]'));
      expect(footer.classes['hidden']).not.toBeDefined();
    });
  });

  describe('Counter', () => {
    it('should render counter for 1 todo', () => {
      todosService.todosSig.set([{ id: '1', text: 'foo', isCompleted: false }]);
      fixture.detectChanges();
      const todoCount = debugEl.query(By.css('[data-testid="todoCount"]'))
      expect(todoCount.nativeElement.textContent).toContain('1 item left');
    });
    it('should render counter for 2 or more todos', () => {
      todosService.todosSig.set([
        { id: '1', text: 'foo', isCompleted: false },
        { id: '2', text: 'bar', isCompleted: false },
      ]);
      fixture.detectChanges();
      const todoCount = debugEl.query(By.css('[data-testid="todoCount"]'))
      expect(todoCount.nativeElement.textContent).toContain('2 items left');
    });
  });

  describe('Filters', () => {
    it('highlights default filter', () => {
      const filterLinks = debugEl.queryAll(By.css('[data-testid="filterLink"]'));
      expect(filterLinks[0].classes['selected']).toBe(true);
    });

    it('highlights changed filter', () => {
      todosService.filterSig.set(FilterEnum.active);
      fixture.detectChanges();
      const filterLinks = debugEl.queryAll(By.css('[data-testid="filterLink"]'));
      expect(filterLinks[1].classes['selected']).toBe(true);
    });

    it('should change a filter', () => {
      const filterLinks = debugEl.queryAll(By.css('[data-testid="filterLink"]'));
      filterLinks[1].triggerEventHandler('click');
      expect(todosService.filterSig()).toBe(FilterEnum.active);
    });
    
  });
  
});
