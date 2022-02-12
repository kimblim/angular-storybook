import { Component, Input } from '@angular/core';
@Component({
  selector: 'dkfds-button',
  //templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  template: `
    <button class="button" [ngClass]="'button-' + [btnStyling]">
      <ng-template
        [ngIf]="btnStyling === 'unstyled' && iconOnly === true"
        [ngIfElse]="styled"
      >
        <span class="sr-only">{{ btnLabel }}</span>
      </ng-template>

      <ng-template #styled>
        {{ btnLabel }}
      </ng-template>
    </button>
  `,
})
export class ButtonComponent {
  @Input() btnStyling:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'unstyled';

  @Input() btnLabel: string;

  @Input() icon?: string;

  @Input() iconOnly?: boolean;

  constructor() {
    // Initialization inside the constructor
    this.btnStyling = 'secondary';
    this.btnLabel = '';
  }
}
