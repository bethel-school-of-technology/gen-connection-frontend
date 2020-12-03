import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenLoginComponent } from './gen-login.component';

describe('GenLoginComponent', () => {
  let component: GenLoginComponent;
  let fixture: ComponentFixture<GenLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
