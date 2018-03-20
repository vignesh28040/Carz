import { Directive, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentRef, OnDestroy } from '@angular/core';
import { AdvertisementComponent } from "../banner/advertisement.component";

@Directive({
  selector: '[appAds]'
})
export class AdsDirective implements OnInit, OnDestroy {
  interval: any;

  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadAds();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  createBanner(adComponent: { new(): AdvertisementComponent }): ComponentRef<AdvertisementComponent> {
    this.viewContainerRef.clear();
    let adComponentFactory = this.componentFactoryResolver.resolveComponentFactory(adComponent);
    let adComponentRef = this.viewContainerRef.createComponent(adComponentFactory);
    adComponentRef.instance.data = { Title: 'TESTNBAN', Content: 'TEST' };
    return adComponentRef;
  }

  loadAds() {
    console.log("Directive Called")
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadAds();
    }, 3000)
  }

}
