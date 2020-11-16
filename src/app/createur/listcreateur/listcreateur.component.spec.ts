import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcreateurComponent } from './listcreateur.component';

describe('ListcreateurComponent', () => {
  let component: ListcreateurComponent;
  let fixture: ComponentFixture<ListcreateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcreateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcreateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
