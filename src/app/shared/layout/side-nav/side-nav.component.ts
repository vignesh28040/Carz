import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterChangeService } from "../../../services/router-change.service";

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent implements OnInit {
    leftMenus: any;
    @Output() syncEvent = new EventEmitter<string>();

    constructor(private routeChangeService: RouterChangeService) { }

    ngOnInit() {
        this.leftMenus = this.routeChangeService.getLeftMenus();
        this.routeChangeService.leftMenus.subscribe((value: any) => {
            this.leftMenus = value;
        });
    }

    synced(){
        this.syncEvent.emit("SYNC");
    }
}