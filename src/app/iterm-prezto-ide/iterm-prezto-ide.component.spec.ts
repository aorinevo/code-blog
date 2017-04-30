/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItermPreztoIdeComponent } from './iterm-prezto-ide.component';

describe('ItermPreztoIdeComponent', () => {
  let component: ItermPreztoIdeComponent;
  let fixture: ComponentFixture<ItermPreztoIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItermPreztoIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItermPreztoIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
