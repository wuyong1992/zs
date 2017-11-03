import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZsIndustryComponent } from './zs-industry.component';

describe('ZsIndustryComponent', () => {
  let component: ZsIndustryComponent;
  let fixture: ComponentFixture<ZsIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZsIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZsIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
