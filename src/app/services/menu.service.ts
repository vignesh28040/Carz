import { Injectable } from "@angular/core/";
import { Menus } from "../../assets/menus";

@Injectable()
export class MenuService {

    getMenus() {
        return Menus.slice();
    }

    getChildMenus(Url: string) {
        var result = Menus.slice().filter(x => x.url == Url);
        if (result.length) {
            return result[0].childMenu.slice();
        }
        else
            return null;
    }
}