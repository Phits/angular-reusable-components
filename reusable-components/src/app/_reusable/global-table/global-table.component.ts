import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserList } from '../../_models/user-list';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.scss']
})
export class GlobalTableComponent {
  @Input() HeadArray: any; // To Do: create interface
  @Input() UsersList: UserList[] = [];
  @Input() isAction?: boolean;
  @Output() onEdit = new EventEmitter<number>;


  editClicked(i: number) {
    this.onEdit.emit(i);
  }
}
