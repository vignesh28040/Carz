import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from "../../../services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('topMenu') topMenu: any;

  constructor() { }

  ngOnInit(){
  }
}
