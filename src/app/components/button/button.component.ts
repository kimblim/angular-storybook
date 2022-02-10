import { Component, Input } from '@angular/core';

@Component({
  selector: 'dkfds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() btnStyling:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'unstyled';

  @Input() btnLabel: string;

  constructor() {
    // Initialization inside the constructor
    this.btnStyling = 'secondary';
    this.btnLabel = '';
  }
}
