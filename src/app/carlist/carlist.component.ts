import { Component, OnInit } from '@angular/core';
import { Cars } from "../../assets/Car";
import { CarsService } from "../services/cars.service";

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {

  carlist: Cars[];

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.carlist = this.carService.getCars();
  }

}
