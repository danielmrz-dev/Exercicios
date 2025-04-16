import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { TodosService } from '../../todos/services/todos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugEl: DebugElement;
  let todoService: TodosService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    todoService = TestBed.inject(TodosService);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should add a todo', () => {
    jest.spyOn(todoService, 'addTodo').mockImplementation(() => {});
    const input = debugEl.query(By.css('[data-testid="newTodoInput"]'));
    input.nativeElement.value = 'foo';
    input.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    expect(todoService.addTodo).toHaveBeenCalledWith('foo');
    expect(component.text).toEqual("");
  });
  
});
