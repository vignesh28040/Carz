import { Injectable } from "@angular/core";
import { CarsList, Cars } from "./../../assets/Car";


@Injectable()
export class CarsService {
    constructor() { }

    getCars() {
        return CarsList.slice();
    }

    getCarDetails(id: number) {
        var carDetails: Cars;
        var result = CarsList.filter(x => x.Id == id).slice()
        if (result.length) {
            return (carDetails = result[0]);
        }
        else
            return null;
    }
}