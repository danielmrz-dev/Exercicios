import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNoStandaloneComponent } from './comp-no-standalone.component';

describe('CompNoStandaloneComponent', () => {
  let component: CompNoStandaloneComponent;
  let fixture: ComponentFixture<CompNoStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompNoStandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompNoStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
