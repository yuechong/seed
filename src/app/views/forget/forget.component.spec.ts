import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetComponent } from '.';

describe('ForgetComponent', () => {
  let component: ForgetComponent;
  let fixture: ComponentFixture<ForgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
