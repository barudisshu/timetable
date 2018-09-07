import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachergeneComponent } from './teachergene.component';

describe('TeachergeneComponent', () => {
  let component: TeachergeneComponent;
  let fixture: ComponentFixture<TeachergeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachergeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachergeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
