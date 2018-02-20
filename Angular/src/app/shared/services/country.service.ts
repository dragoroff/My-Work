import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CountryBasic } from './../models/countryBasic.model';

@Injectable()
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  getCountriesNames(func:(x: Array<any>)=>void):any{
    this.httpClient.get("https://restcountries.eu/rest/v2/all?fields=name")
      .subscribe(func);
  }
 


  getCountriesInfo():Observable<CountryBasic[]>{
    return this.httpClient.get<CountryBasic[]>("https://restcountries.eu/rest/v2/all?fields=name;flag")
  }
}
