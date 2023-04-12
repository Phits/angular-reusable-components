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

  jumboTitle = 'Jumbo Example';
  jumboDescription = 'Lorem ipsum...';

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

}
