import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListonepostComponent } from './listonepost.component';

describe('ListonepostComponent', () => {
  let component: ListonepostComponent;
  let fixture: ComponentFixture<ListonepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListonepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListonepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
