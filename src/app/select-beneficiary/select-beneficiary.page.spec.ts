import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBeneficiaryPage } from './select-beneficiary.page';

describe('SelectBeneficiaryPage', () => {
  let component: SelectBeneficiaryPage;
  let fixture: ComponentFixture<SelectBeneficiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBeneficiaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBeneficiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
