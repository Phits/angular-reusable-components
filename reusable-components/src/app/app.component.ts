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

  btnClass = 'btn-primary';
  btnText = "Show Alert";

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
    console.log('Clicked ', e);
  }

  onEdit(i: number) {
      console.log(i);
  }

}
