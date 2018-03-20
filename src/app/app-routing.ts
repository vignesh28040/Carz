import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { MasterComponent } from "./shared/layout/master/master.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./shared/layout/header/header.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SideNavComponent } from "./shared/layout/side-nav/side-nav.component";
import { SettingsComponent } from "./settings/settings.component";

//Services
import { AuthGuard } from "./services/auth-guard.service";

const appRouting: Routes = [
    {
        path: '', component: MasterComponent, children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'carlist', loadChildren: './carlist/car.module#CarModule' }
        ], canActivate: [AuthGuard]
    },
    { path: 'signin', component: SigninComponent }
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRouting)




