import { Address } from './../shared/models/address.model';
import { Component, OnInit } from '@angular/core';
import {StoreInfo} from './../shared/models/storeInfo.model';
import {CountryBasic} from './../shared/models/countryBasic.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    myStore: StoreInfo;

ngOnInit() {

    this.myStore = new StoreInfo();
    this.myStore.address = new Address();
    Object.assign(this.myStore, {
        name: 'book',
        mainImage: './assets/images/books.jpg'
    });

    Object.assign(this.myStore.address, {
        flag: 'https://restcountries.eu/data/isr.svg',
        name: 'Israel',
        cityName: 'Tel-Aviv',
        roadName: 'Hamasger',
        houseNumber: 12
    });

}




}