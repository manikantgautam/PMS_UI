import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeSalaryWagesComponent } from './add-employee-salary-wages.component';

describe('AddEmployeeSalaryWagesComponent', () => {
  let component: AddEmployeeSalaryWagesComponent;
  let fixture: ComponentFixture<AddEmployeeSalaryWagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeSalaryWagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeSalaryWagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
