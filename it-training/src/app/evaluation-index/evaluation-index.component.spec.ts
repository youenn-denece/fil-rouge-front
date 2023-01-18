import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationIndexComponent } from './evaluation-index.component';

describe('EvaluationIndexComponent', () => {
  let component: EvaluationIndexComponent;
  let fixture: ComponentFixture<EvaluationIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
