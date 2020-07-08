import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRatesPage } from './daily-rates.page';

describe('DailyRatesPage', () => {
  let component: DailyRatesPage;
  let fixture: ComponentFixture<DailyRatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
