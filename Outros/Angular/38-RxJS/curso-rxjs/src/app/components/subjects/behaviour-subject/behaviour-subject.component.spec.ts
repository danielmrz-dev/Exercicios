import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectComponent } from './behaviour-subject.component';

describe('BehaviourSubjectComponent', () => {
  let component: BehaviourSubjectComponent;
  let fixture: ComponentFixture<BehaviourSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
