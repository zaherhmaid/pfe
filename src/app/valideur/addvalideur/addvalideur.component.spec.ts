import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvalideurComponent } from './addvalideur.component';

describe('AddvalideurComponent', () => {
  let component: AddvalideurComponent;
  let fixture: ComponentFixture<AddvalideurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvalideurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvalideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
