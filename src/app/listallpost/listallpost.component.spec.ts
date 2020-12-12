import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallpostComponent } from './listallpost.component';

describe('ListallpostComponent', () => {
  let component: ListallpostComponent;
  let fixture: ComponentFixture<ListallpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListallpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
