import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CarlistComponent } from "./carlist.component";
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsService } from "../services/cars.service";
import { SharedModule } from "../shared/shared.module";
import { CarRouting } from "./car.routing";
import { CurrencySymbolPipe } from "../shared/pipes/currencysymbol.pipe";

@NgModule({
    declarations: [
        CarlistComponent,
        CarDetailsComponent,
        CurrencySymbolPipe

    ],
    imports: [
        CommonModule,
        CarRouting,
        SharedModule
    ],
    providers: [CarsService]
})

export class CarModule { }


