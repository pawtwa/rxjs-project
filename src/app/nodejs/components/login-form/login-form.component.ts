import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { endWith, mapTo, startWith, delay, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  btnOpts: MatProgressButtonOptions = {
    active: false,
    text: 'Login',
    spinnerSize: 19,
    raised: true,
    stroked: true,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  };
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  onSubmit() {
    console.log('DATA', this.form.getRawValue());
    this.userService.login(this.form.getRawValue()).pipe(
      catchError(() => of(false)),
      delay(1000),
      startWith(true),
      endWith(false)
    ).subscribe(data => {

      if (data) {
        this.btnOpts.active = true;
        this.btnOpts.disabled = true;
      } else {
        this.btnOpts.active = false;
        this.btnOpts.disabled = false;
      }
    });
  }
}
