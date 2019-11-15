import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDashboardComponent } from './re-dashboard.component';

describe('ReDashboardComponent', () => {
  let component: ReDashboardComponent;
  let fixture: ComponentFixture<ReDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
