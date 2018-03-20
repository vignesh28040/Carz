import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CarlistComponent } from "./carlist.component";
import { CarDetailsComponent } from './car-details/car-details.component';


export const CarRoutes: Routes = [
    {
        path: '', component: CarlistComponent, children: [
            { path: ':id', component: CarDetailsComponent }
        ]
    }
]
export const CarRouting: ModuleWithProviders = RouterModule.forChild(CarRoutes)


