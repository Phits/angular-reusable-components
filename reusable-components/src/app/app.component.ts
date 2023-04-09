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
  usersList: UserList[] = [];
  cardWidth = '240px';
  floatLeft = true;

  constructor() {}

  ngOnInit() {
   this.usersList = data;
  }


}
