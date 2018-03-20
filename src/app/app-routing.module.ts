import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MaterialModule } from "./shared/material.module";
import { SharedModule } from "./shared/shared.module";

//Components
import { MasterComponent } from "./shared/layout/master/master.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SideNavComponent } from "./shared/layout/side-nav/side-nav.component";
import { SettingsComponent } from "./settings/settings.component";
import { BannerComponent } from "./shared/banner/banner.component";

//Services
import { AppRouting } from "./app-routing";
import { MenuService } from "./services/menu.service";
import { RouterChangeService } from "./services/router-change.service";
import { AuthGuard } from "./services/auth-guard.service";
import { UserService } from "./services/user.service";
import { AdsDirective } from "./shared/directives/ads.directive";
import { SettingsService } from "./services/settings.service";

@NgModule({
    declarations: [
        MasterComponent,
        HeaderComponent,
        SideNavComponent,
        HomeComponent,
        SigninComponent,
        SettingsComponent,
        BannerComponent,
        AdsDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRouting,
        MaterialModule,
        SharedModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard,
        RouterChangeService,
        UserService,
        MenuService,
        SettingsService
    ]
})

export class AppRoutingModule { }



