import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SettingsService } from "../services/settings.service";
import { Settings } from "../../assets/settings";
import { MatTableDataSource } from "@angular/material/table";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styles: [`.example-container {
                    display: flex;
                    flex-direction: column;
                }
                .example-container > * {
                    width: 100%;
                }
                .border-table{
                    border:solid 1px #eee;
                }
                `
    ]
})
export class SettingsComponent implements OnInit {
    @ViewChild("SettingForm") settingForm: NgForm;
    options: string[];
    settings: Settings[];
    displayedColumns = ['id', 'name', 'status', 'description'];

    constructor(private settingsService: SettingsService) { }


    ngOnInit() {
         this.settingsService.settingChanges.subscribe(SettingsData => {
            let dataSource = new MatTableDataSource(this.settings=SettingsData);
        })
        this.options = ['true', 'false'];
        this.settings = this.settingsService.getSettings();
        let dataSource = new MatTableDataSource(this.settings);
    }

    SaveSetting() {
        this.settingsService.addSetting(
            this.settingForm.value.name,
            this.settingForm.value.status,
            this.settingForm.value.description);
        this.settingForm.resetForm();
    }


} 