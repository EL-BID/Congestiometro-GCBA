import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, shareReplay, startWith } from 'rxjs/operators';

import { DisplayLogService } from 'src/app/services/display-log.service';
import { User, UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('1000ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayUsersComponent implements OnInit {
  @Input() users!: Observable<User[]>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  public dataSource$!: Observable<MatTableDataSource<User>>;
  public pageSizeOptions = [10, 25, 50, 100];

  public columns = [
    { title: 'Usuario', field: 'username' },
    { title: 'Rol', field: 'role', pipe: 'role' },
    { title: '', field: 'options', pipe: 'options' },
  ];
  public displayedColumns = this.columns.map((c) => c.field);

  public selectedUser = new Subject<User>();
  public selectedUsername = this.selectedUser.pipe(
    map((user) => (user ? user.username : 'null')),
    startWith('null')
  );
  public editUserForm = new FormGroup({ password: new FormControl('', [Validators.required]) });

  public nameSearch = new BehaviorSubject('');
  @ViewChild('search') searchInput!: ElementRef;

  public loading = new BehaviorSubject(false);

  constructor(private userService: UserService, private displayLogService: DisplayLogService) {}

  public ngOnInit() {
    this.dataSource$ = combineLatest([
      this.users,
      this.nameSearch.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map((search) => search.toLocaleLowerCase())
      ),
    ]).pipe(
      map(([users, nameSearch]) => {
        const data = new MatTableDataSource(
          users
            .filter((user) => user.username.toLocaleLowerCase().includes(nameSearch))
            .sort((a, b) => (a.username.toLocaleLowerCase() > b.username.toLocaleLowerCase() ? 1 : -1))
        );
        data.paginator = this.paginator;
        return data;
      })
    );
  }

  public onKeyUp(event: KeyboardEvent) {
    this.nameSearch.next((event.target as HTMLInputElement).value);
  }

  public clearSearch() {
    this.searchInput.nativeElement.value = '';
    this.nameSearch.next('');
  }

  public editUser(username: string, password: string) {
    if (!confirm('¿Está seguro que desea editar este usuario?')) return;
    this.loading.next(true);
    return this.userService
      .editUser(username, password)
      .then(() => {
        this.selectedUser.next();
        this.editUserForm.reset();
        this.displayLogService.openLogSuccess('Usuario editado');
      })
      .catch((err) => this.displayLogService.openLogError(err?.error?.message ? err.error.message : err))
      .finally(() => this.loading.next(false));
  }

  public deleteUser(username: string) {
    if (!confirm('¿Está seguro que desea borrar este usuario?')) return;
    this.loading.next(true);
    return this.userService
      .deleteUser(username)
      .then(() => this.displayLogService.openLogSuccess('Usuario eliminado'))
      .catch((err) => this.displayLogService.openLogError(err?.error?.message ? err.error.message : err))
      .finally(() => this.loading.next(false));
  }
}
