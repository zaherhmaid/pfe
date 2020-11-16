import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatechecklistComponent } from './updatechecklist.component';

describe('UpdatechecklistComponent', () => {
  let component: UpdatechecklistComponent;
  let fixture: ComponentFixture<UpdatechecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatechecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatechecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
