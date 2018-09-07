import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassgeneComponent } from './classgene.component';

describe('ClassgeneComponent', () => {
  let component: ClassgeneComponent;
  let fixture: ComponentFixture<ClassgeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassgeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassgeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
