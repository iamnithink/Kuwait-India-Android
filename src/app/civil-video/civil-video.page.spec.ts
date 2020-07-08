import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilVideoPage } from './civil-video.page';

describe('CivilVideoPage', () => {
  let component: CivilVideoPage;
  let fixture: ComponentFixture<CivilVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
