import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchecklistComponent } from './listchecklist.component';

describe('ListchecklistComponent', () => {
  let component: ListchecklistComponent;
  let fixture: ComponentFixture<ListchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
