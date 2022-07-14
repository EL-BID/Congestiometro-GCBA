import { ChangeDetectionStrategy, Component, Inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

interface DataType {
  text: string;
  action?: { text: string; url: string };
}

@Injectable({ providedIn: 'root' })
export class DisplayLogService {
  private seconds = 5;
  constructor(private snackBar: MatSnackBar) {}

  private openLog(color: string, data: DataType) {
    return this.snackBar.openFromComponent(DisplayLogComponent, {
      data,
      duration: this.seconds * 1000,
      panelClass: ['mat-toolbar', 'mat-' + color],
    });
  }

  public openLogError(text: string, action?: { text: string; url: string }) {
    return this.openLog('warn', { text, action });
  }

  public openLogWarning(text: string) {
    return this.openLog('accent', { text });
  }

  public openLogSuccess(text: string) {
    return this.openLog('primary', { text });
  }
}

@Component({
  selector: 'mauna-display-log',
  template: `
    <div fxLayout="row" fxLayoutAlign="space-between center">
      <span class="mat-body-1" fxFlex="auto"> {{ data.text }} </span>
      <button
        *ngIf="!!data.action"
        mat-stroked-button
        style="margin-left: 1em;"
        (click)="dismissWithAction()"
        [routerLink]="data.action?.url"
      >
        {{ data.action?.text }}
      </button>
      <button *ngIf="!data.action" mat-icon-button (click)="closeAlert()">
        <mat-icon> close </mat-icon>
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayLogComponent {
  constructor(
    private snackBarRef: MatSnackBarRef<DisplayLogComponent>,
    @Inject(MAT_SNACK_BAR_DATA)
    public data: DataType
  ) {}

  public closeAlert() {
    this.snackBarRef.dismiss();
  }

  public dismissWithAction() {
    this.snackBarRef.dismissWithAction();
  }
}
