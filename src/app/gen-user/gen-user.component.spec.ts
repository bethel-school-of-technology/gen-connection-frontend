import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenUserComponent } from './gen-user.component';

describe('GenUserComponent', () => {
  let component: GenUserComponent;
  let fixture: ComponentFixture<GenUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
