import { Directive, HostListener, ViewContainerRef, ComponentFactoryResolver, ComponentRef, Input } from '@angular/core'
import { CarImages } from "../../../assets/Car";
import { DialogComponent } from "./../../shared/dialog/dialog.component";

@Directive({
    selector:"[modalPopup]"
})
export class PopupDirective{
    @Input() Images: CarImages[];
   constructor(
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        console.log("modalPopup Called")
    }

    createDialog(dialogComponent: { new(): DialogComponent }): ComponentRef<DialogComponent> {
        this.viewContainer.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        let dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);

        return dialogComponentRef;
    }

}