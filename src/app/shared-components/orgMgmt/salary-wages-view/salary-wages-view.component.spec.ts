import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryWagesViewComponent } from './salary-wages-view.component';

describe('SalaryWagesViewComponent', () => {
  let component: SalaryWagesViewComponent;
  let fixture: ComponentFixture<SalaryWagesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryWagesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryWagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
