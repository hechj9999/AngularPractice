import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPage2Component } from './main-page2.component';

describe('MainPage2Component', () => {
  let component: MainPage2Component;
  let fixture: ComponentFixture<MainPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
