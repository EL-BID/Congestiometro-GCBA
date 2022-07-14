import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public showPassword = false;
  public errorMessage = new BehaviorSubject<string>('');
  public loading = new BehaviorSubject<boolean>(false);
  public loginForm: FormGroup;

  constructor(fb: FormBuilder, private userService: UserService) {
    this.loginForm = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  public login(username: string, password: string) {
    this.errorMessage.next('');
    this.loading.next(true);
    return this.userService.login(username, password).catch(() => {
      this.loading.next(false);
      this.errorMessage.next('Usuario o contraseña erróneos');
    });
  }
}
