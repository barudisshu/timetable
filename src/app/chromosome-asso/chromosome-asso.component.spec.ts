import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromosomeAssoComponent } from './chromosome-asso.component';

describe('ChromosomeAssoComponent', () => {
  let component: ChromosomeAssoComponent;
  let fixture: ComponentFixture<ChromosomeAssoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromosomeAssoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromosomeAssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
