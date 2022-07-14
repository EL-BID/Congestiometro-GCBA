import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';

import { DisplayLogService } from 'src/app/services/display-log.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  @Output() cancel = new EventEmitter();

  private updateUsers = new Subject<void>();
  public users = this.updateUsers.pipe(
    startWith(1),
    switchMap(() => this.userService.getUsers())
  );

  public creatingNewUser = new Subject<boolean>();
  public loading = new BehaviorSubject(false);
  public form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  public alreadyExistingUsername = combineLatest([this.form.controls.username.valueChanges, this.users]).pipe(
    filter(() => this.form.controls.username.valid),
    debounceTime(500),
    distinctUntilChanged(),
    map(([username, users]) => users.some((user) => user.username === username)),
    startWith(false),
    tap((exists) => {
      if (exists) this.form.controls.username.setErrors({ ...this.form.controls.username.errors, exists });
    }),
    shareReplay(1)
  );

  public validForm = combineLatest([this.loading, this.alreadyExistingUsername, this.form.statusChanges]).pipe(
    map(([loading, existingUsername, status]) => ({
      valid: !loading && !existingUsername && status === 'VALID',
    })),
    startWith({ valid: false })
  );

  constructor(public userService: UserService, private displayLog: DisplayLogService) {}

  public createUser({ username, password }: { username: string; password: string }) {
    this.loading.next(true);
    return this.userService
      .createUser(username, password)
      .then(() => {
        this.form.reset();
        this.creatingNewUser.next(false);
        this.displayLog.openLogSuccess('Usuario creado');
        this.updateUsers.next();
      })
      .catch((err) => this.displayLog.openLogError(err?.error?.message ? err.error.message : err))
      .finally(() => this.loading.next(false));
  }
}
