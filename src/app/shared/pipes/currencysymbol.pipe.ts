
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'currencysymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

    transform(value: any, currency: any) {
        switch (currency) {
            case 'IND':
                return "₹" + value;
            default:
                return "$" + value;
        }
    }
}
