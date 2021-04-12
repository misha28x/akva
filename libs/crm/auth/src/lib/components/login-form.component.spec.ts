import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import {
  NzButtonComponent,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
} from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        HttpClientModule,
        ReactiveFormsModule,
      ],
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

    component.loginForm.controls['login'].setValue('admin');
    component.loginForm.controls['password'].setValue('admin');
    submitBtn.click();

    expect(submitted).toBeCalledWith({ login: 'admin', password: 'admin' });
  });
});
