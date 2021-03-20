import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBranchViewComponent } from './company-branch-view.component';

describe('CompanyBranchViewComponent', () => {
  let component: CompanyBranchViewComponent;
  let fixture: ComponentFixture<CompanyBranchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyBranchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBranchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
