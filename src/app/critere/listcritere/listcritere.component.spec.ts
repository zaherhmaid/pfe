import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcritereComponent } from './listcritere.component';

describe('ListcritereComponent', () => {
  let component: ListcritereComponent;
  let fixture: ComponentFixture<ListcritereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcritereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
