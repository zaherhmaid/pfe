import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcreateurComponent } from './addcreateur.component';

describe('AddcreateurComponent', () => {
  let component: AddcreateurComponent;
  let fixture: ComponentFixture<AddcreateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcreateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcreateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
