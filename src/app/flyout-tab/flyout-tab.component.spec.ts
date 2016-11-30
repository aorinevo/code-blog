/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlyoutTabComponent } from './flyout-tab.component';

describe('FlyoutTabComponent', () => {
  let component: FlyoutTabComponent;
  let fixture: ComponentFixture<FlyoutTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyoutTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyoutTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
