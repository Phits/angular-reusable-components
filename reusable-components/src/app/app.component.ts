import { Component, OnInit } from '@angular/core';
import { UserList } from './_models/user-list';
import data from './userList.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Reusable Components';
  UsersList: UserList[] = [];
  cardWidth = '240px';

  jumboTitle = 'Reusable Components';
  jumboDescription = 'Angular 15.2.5';

    buttonText = 'Toggle Alert'
    buttonSize = 'medium';
    buttonStyle = 'btn-primary';
    showAlert = false;

  HeadArray = [
      {'Head': 'Name', 'FieldName': 'name'},
      {'Head': 'UserName', 'FieldName': 'username'},
      {'Head': 'Email', 'FieldName': 'email'},
      {'Head': 'Phone', 'FieldName': 'phone'},
      {'Head': 'Action', 'FieldName': ''},
  ]
    isActive = true;

  tabs: string [] = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
  activeTab? = 0;

  constructor() {}

  ngOnInit() {
   this.UsersList = data;
  }

  onBtnClick(e: Event) {
    this.showAlert = !this.showAlert;
  }

  onEdit(i: number) {
      console.log(i);
  }

  onDelete(i: number) {
      console.log(i);
  }

    currentTab(i: number) {
      this.activeTab = i;
    }

}
