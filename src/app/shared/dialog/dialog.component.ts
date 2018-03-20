import { Component, EventEmitter, OnInit, ViewChild, AfterViewInit, Inject } from "@angular/core";
import { MDBBootstrapModule, ModalModule, ModalDirective } from 'angular-bootstrap-md';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CarImages } from "../../../assets/Car";

@Component({
    selector: "app-dialog",
    templateUrl: "./dialog.component.html"
})

export class DialogComponent implements OnInit {
    Images: CarImages[];
    ImagesUrls = [];
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.Images = this.data.slides;
        this.Images.forEach(element => {
            this.ImagesUrls.push(element.ImageUrl);
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

} 