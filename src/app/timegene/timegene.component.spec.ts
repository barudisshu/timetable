import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimegeneComponent } from './timegene.component';

describe('TimegeneComponent', () => {
  let component: TimegeneComponent;
  let fixture: ComponentFixture<TimegeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimegeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimegeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
