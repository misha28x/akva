import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid while empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should not submit with invalid form', () => {
    const submitted = jest.spyOn(component.submitted, 'emit');
    const submitBtn = fixture.debugElement.nativeElement.querySelector(
      '.form__button'
    );

    submitBtn.click();

    expect(submitted).not.toBeCalled();
  });

  it('should submit with valid form', () => {
    const submitted = jest.spyOn(component.submitted, 'emit');
    const submitBtn = fixture.debugElement.nativeElement.querySelector(
      '.form__button'
    );

    component.loginForm.controls['login-page'].setValue('admin');
    component.loginForm.controls['password'].setValue('admin');
    submitBtn.click();

    expect(submitted).toBeCalledWith({ login: 'admin', password: 'admin' });
  });
});
