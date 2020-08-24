import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid with empty fields', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should not submit with invalid form', () => {
    const authorize = jest.spyOn(component, 'authorize');
    const submitBtn = fixture.debugElement.nativeElement.querySelector(
      '.form__button'
    );

    submitBtn.click();

    expect(authorize).not.toBeCalled();
  });

  it('should submit with valid form', () => {
    const authorize = jest.spyOn(component, 'authorize');
    const submitBtn = fixture.debugElement.nativeElement.querySelector(
      '.form__button'
    );

    component.loginForm.controls['login'].setValue('admin');
    component.loginForm.controls['password'].setValue('admin');
    submitBtn.click();

    expect(authorize).toBeCalledWith({ login: 'admin', password: 'admin' });
  });
});
