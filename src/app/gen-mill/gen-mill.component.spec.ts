import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenMillComponent } from './gen-mill.component';

describe('GenMillComponent', () => {
  let component: GenMillComponent;
  let fixture: ComponentFixture<GenMillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenMillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenMillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
