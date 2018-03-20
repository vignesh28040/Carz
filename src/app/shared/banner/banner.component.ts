import { Component, OnInit, ViewChild } from "@angular/core";
import { AdvertisementComponent } from "./advertisement.component";
import { AdsDirective } from './../directives/ads.directive';

@Component({
    selector: 'app-banner',
    template: `<div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template appAds></ng-template>
              </div>`
})
export class BannerComponent implements OnInit {
    @ViewChild(AdsDirective) dialogAnchor: AdsDirective;
    ngOnInit() {
        this.dialogAnchor.createBanner(AdvertisementComponent);
    }

}