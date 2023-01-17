import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSessionDetailsComponent } from './dashboard-session-details.component';

describe('DashboardSessionDetailsComponent', () => {
  let component: DashboardSessionDetailsComponent;
  let fixture: ComponentFixture<DashboardSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSessionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
