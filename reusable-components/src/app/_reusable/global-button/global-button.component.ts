import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-global-button',
  templateUrl: './global-button.component.html',
  styleUrls: ['./global-button.component.scss']
})
export class GlobalButtonComponent {
  @Input() text?: string;
  @Input() size?: string;
  @Input() backgroundColor?: string;
  @Input() darkMode?: string;

  @Output() onBtnClick = new EventEmitter<Event>;

  onClick(e: Event) {
    this.onBtnClick.emit(e);
  }
}
