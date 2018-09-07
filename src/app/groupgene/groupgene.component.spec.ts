import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupgeneComponent } from './groupgene.component';

describe('GroupgeneComponent', () => {
  let component: GroupgeneComponent;
  let fixture: ComponentFixture<GroupgeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupgeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupgeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
