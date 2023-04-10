import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-global-button',
  templateUrl: './global-button.component.html',
  styleUrls: ['./global-button.component.scss']
})
export class GlobalButtonComponent {
  @Input() btnClass = '';
  @Input() text = '';

  @Output() onBtnClick = new EventEmitter<any>;

  onClick() {
    this.onBtnClick.emit('Hi');
  }
}
