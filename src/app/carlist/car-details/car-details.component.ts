import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { CarsService } from "../../services/cars.service";
import { Cars } from "../../../assets/Car";
import { DialogComponent } from "../../shared/dialog/dialog.component";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  @Input() id: number;

  carId: number;
  carDetails: Cars;
  constructor(private route: ActivatedRoute, private carService: CarsService,
     public dialog: MatDialog) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.carId = params["id"];
        this.getcardetails(this.carId);
      }
    )
  }
  openDialogBox() {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '500px',
      width: '750px',
      data: { slides: this.carDetails.Images }
    });
  }

  getcardetails(id: number) {
    this.carDetails = this.carService.getCarDetails(id);
  }

}
