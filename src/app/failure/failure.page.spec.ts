import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailurePage } from './failure.page';

describe('FailurePage', () => {
  let component: FailurePage;
  let fixture: ComponentFixture<FailurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailurePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
