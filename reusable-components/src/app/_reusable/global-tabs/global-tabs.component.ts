import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-global-tabs',
  templateUrl: './global-tabs.component.html',
  styleUrls: ['./global-tabs.component.scss']
})
export class GlobalTabsComponent {
@Input() tabArray?: string[] = [];
activateTab: number = 0;

@Output() currentTab = new EventEmitter<number>;

tabSelected(i: number) {
  this.activateTab = i;
  this.currentTab.emit(i);
}

}
