import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { MenuService } from "./menu.service";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RouterChangeService {
    changeSubscription: Subscription;
    currentRoute: any;
    leftMenuCount: number;
    leftMenus: Subject<any> = new Subject();

    constructor(private router: Router, private menuService: MenuService) {
        this.changeSubscription = router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = "/" + event['url'].split('/')[1];
                if (this.currentRoute === "/") {
                    this.currentRoute = "/home";
                }
                var result = this.menuService.getChildMenus(this.currentRoute);
                this.leftMenuCount = result.length;
                this.leftMenus.next(result);
            }
        })
    }

    getLeftMenus() {
        return this.menuService.getChildMenus(this.currentRoute);
    }

    ngOnDestroy() {
        this.changeSubscription.unsubscribe();
    }

}