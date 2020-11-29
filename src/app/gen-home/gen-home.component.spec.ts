import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenHomeComponent } from './gen-home.component';

describe('GenHomeComponent', () => {
  let component: GenHomeComponent;
  let fixture: ComponentFixture<GenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
