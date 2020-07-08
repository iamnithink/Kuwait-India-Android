import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQuestionPage } from './security-question.page';

describe('SecurityQuestionPage', () => {
  let component: SecurityQuestionPage;
  let fixture: ComponentFixture<SecurityQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityQuestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
