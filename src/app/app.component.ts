import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title : 'fffdfsfdfddfdfdfs',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis',
      loveIts : 0,
      created_at: new Date()
    },
    {
      title : 'fffdfsdfdsfddsfdfdfs',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis',
      loveIts : 1,
      created_at: new Date()
    },
    {
      title : 'fffdsdfdfssfdsfdfdfdfs',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis',
      loveIts : -2,
      created_at: new Date()
    },
  ];


}
