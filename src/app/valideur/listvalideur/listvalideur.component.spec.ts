import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvalideurComponent } from './listvalideur.component';

describe('ListvalideurComponent', () => {
  let component: ListvalideurComponent;
  let fixture: ComponentFixture<ListvalideurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvalideurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvalideurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
