import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdealerdashboardComponent } from './subdealerdashboard.component';

describe('SubdealerdashboardComponent', () => {
  let component: SubdealerdashboardComponent;
  let fixture: ComponentFixture<SubdealerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdealerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdealerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
