import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTopComponent } from './return-top.component';

describe('ReturnTopComponent', () => {
  let component: ReturnTopComponent;
  let fixture: ComponentFixture<ReturnTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
