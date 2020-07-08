import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchListPage } from './branch-list.page';

describe('BranchListPage', () => {
  let component: BranchListPage;
  let fixture: ComponentFixture<BranchListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
