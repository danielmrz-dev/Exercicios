import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { DebugElement } from '@angular/core';
import { UtilsService } from '../services/utils.service';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let debugEl: DebugElement;
  const mockUtilsService = {
    range: () => [1, 2, 3, 4, 5]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginationComponent],
      providers: [
        { provide: UtilsService, useValue: mockUtilsService }
      ]
    });
    
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    component.total = 50;
    component.total = 10;
    component.currentPage = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders correct pagination', () => {
    const pageContainers = debugEl.queryAll(By.css('[data-testid="page-container"'));
    expect(pageContainers.length).toBe(5);
    expect(pageContainers[0].nativeElement.textContent).toContain('1');
  });

  it('should emit a clicked page', () => {
    const pageContainers = debugEl.queryAll(By.css('[data-testid="page-container"'));
    let clickedPage: number | undefined;
    component.pageChangeEvent.pipe(first()).subscribe((page) => {
      clickedPage = page;
    });
    pageContainers[0].triggerEventHandler('click');
    expect(clickedPage).toEqual(1);
  });
  
  
});
