import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){ 
    firebase.initializeApp({
      apiKey: "AIzaSyDz1V5DlBU84B-623WGCvoUtlWE1HtzTlc",
      authDomain: "ng-firstproject-570ac.firebaseapp.com"
    });
  }

}
