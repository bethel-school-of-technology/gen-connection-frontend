import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenBoomComponent } from './gen-boom.component';

describe('GenBoomComponent', () => {
  let component: GenBoomComponent;
  let fixture: ComponentFixture<GenBoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenBoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenBoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
