import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenSignupComponent } from './gen-signup.component';

describe('GenSignupComponent', () => {
  let component: GenSignupComponent;
  let fixture: ComponentFixture<GenSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
