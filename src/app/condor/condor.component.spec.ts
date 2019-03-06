import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondorComponent } from './condor.component';

describe('CondorComponent', () => {
  let component: CondorComponent;
  let fixture: ComponentFixture<CondorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
