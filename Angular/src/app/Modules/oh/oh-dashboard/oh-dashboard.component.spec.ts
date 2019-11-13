import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhDashboardComponent } from './oh-dashboard.component';

describe('OhDashboardComponent', () => {
  let component: OhDashboardComponent;
  let fixture: ComponentFixture<OhDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
