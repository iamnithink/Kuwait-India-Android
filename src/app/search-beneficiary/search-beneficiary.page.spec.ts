import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBeneficiaryPage } from './search-beneficiary.page';

describe('SearchBeneficiaryPage', () => {
  let component: SearchBeneficiaryPage;
  let fixture: ComponentFixture<SearchBeneficiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBeneficiaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBeneficiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
