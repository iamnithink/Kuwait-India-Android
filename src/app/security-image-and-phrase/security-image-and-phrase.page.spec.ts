import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityImageAndPhrasePage } from './security-image-and-phrase.page';

describe('SecurityImageAndPhrasePage', () => {
  let component: SecurityImageAndPhrasePage;
  let fixture: ComponentFixture<SecurityImageAndPhrasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityImageAndPhrasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityImageAndPhrasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
