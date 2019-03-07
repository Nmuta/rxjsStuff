import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveyComponent } from './observey.component';

describe('ObserveyComponent', () => {
  let component: ObserveyComponent;
  let fixture: ComponentFixture<ObserveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
