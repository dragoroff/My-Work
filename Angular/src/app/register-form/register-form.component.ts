import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

import   { ValidationRules } from '../shared/models/form-control.model'
import { RegisterUser } from './../shared/models/account-models/index';
import { CountryBasic} from './../shared/models/countryBasic.model';
import { CountryService } from './../shared/services/country.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  newUser = new RegisterUser();
  countryList: CountryBasic[];
  countryNamesList: string[];
  formGroup: FormGroup;
  isLinear = true;

  constructor(private countryService: CountryService, private formBuilder: FormBuilder) {
      this.valGrouping();
   }

  private valGrouping(){
    this.formGroup = this.formBuilder.group({
      registerNameValid: ['', ValidationRules.registerName],
      registerLastNameValid: ['', ValidationRules.registerLastName],
      ageValid: ['',ValidationRules.ageChecking],
      password: ['', ValidationRules.passwordRules]
    })
  }

  ngOnInit() {

    let func = (res:string[]) => {this.countryNamesList = res};
    this.countryService.getCountriesNames(func);

    this.countryService.getCountriesInfo()
      .subscribe(
        (res: CountryBasic[]) => { this.countryList = res }
      )
  }
}

