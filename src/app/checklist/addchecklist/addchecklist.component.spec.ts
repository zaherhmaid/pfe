import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchecklistComponent } from './addchecklist.component';

describe('AddchecklistComponent', () => {
  let component: AddchecklistComponent;
  let fixture: ComponentFixture<AddchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
