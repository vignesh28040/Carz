import { NgModule } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';
import { DialogComponent } from "./dialog/dialog.component";
import { MaterialModule } from "./material.module";


import { AdsDirective } from './directives/ads.directive';
import { PopupDirective } from "./directives/popup.directive";
import { AdvertisementComponent } from "./banner/advertisement.component";

@NgModule({
     declarations: [
        DialogComponent,
        AdvertisementComponent,
    ],
    imports: [
        MaterialModule,
        SlideshowModule
    ],
    entryComponents: [
        DialogComponent,
        AdvertisementComponent
    ]
})
export class SharedModule { }