import { Injectable } from "@angular/core";
import { SETTINGS_DATA, Settings } from "./../../assets/settings";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SettingsService {
    settingChanges: Subject<any> = new Subject();
    constructor() { }

    getSettings() {
        return SETTINGS_DATA.slice();
    }

    addSetting(name: string, status: boolean, description: string) {
        let setting: Settings = { id: SETTINGS_DATA.slice().length + 1, name: name, status: status, description: description }
        SETTINGS_DATA.push(setting);
        this.settingChanges.next(SETTINGS_DATA.slice());
    }
} 