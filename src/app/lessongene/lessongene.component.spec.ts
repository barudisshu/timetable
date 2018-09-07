import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessongeneComponent } from './lessongene.component';

describe('LessongeneComponent', () => {
  let component: LessongeneComponent;
  let fixture: ComponentFixture<LessongeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessongeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessongeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
