import {CountryBasic} from './countryBasic.model';

export class Address extends CountryBasic{
cityName:string;
roadName:string;
houseNumber:number;

localInfo():string{
    return `${this.cityName} - ${this.houseNumber} ${this.roadName}`;
}
}