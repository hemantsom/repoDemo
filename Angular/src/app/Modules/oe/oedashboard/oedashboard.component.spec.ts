import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OEDashboardComponent } from './oedashboard.component';

describe('OEDashboardComponent', () => {
  let component: OEDashboardComponent;
  let fixture: ComponentFixture<OEDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OEDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OEDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
