import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeneficiaryPage } from './add-beneficiary.page';

describe('AddBeneficiaryPage', () => {
  let component: AddBeneficiaryPage;
  let fixture: ComponentFixture<AddBeneficiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeneficiaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeneficiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
