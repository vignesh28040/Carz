import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../../services/menu.service";
import { RouterChangeService } from "../../../services/router-change.service";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  topMenu: any;
  isShow = true;
  constructor(private menuService: MenuService, private routeChangeService: RouterChangeService) { }

  ngOnInit() {
    this.topMenu = this.menuService.getMenus();
    this.isShow = this.routeChangeService.leftMenuCount > 0;
    this.routeChangeService.leftMenus.subscribe((value: any) => {
      this.isShow = value.length > 0;
    });
  }

  syncEvent(datas: any) {
    console.log(datas)
  }

}
