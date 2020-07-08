import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchLocatorPage } from './branch-locator.page';

describe('BranchLocatorPage', () => {
  let component: BranchLocatorPage;
  let fixture: ComponentFixture<BranchLocatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchLocatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchLocatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
