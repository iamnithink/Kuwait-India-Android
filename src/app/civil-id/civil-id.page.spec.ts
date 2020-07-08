import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilIdPage } from './civil-id.page';

describe('CivilIdPage', () => {
  let component: CivilIdPage;
  let fixture: ComponentFixture<CivilIdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilIdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
