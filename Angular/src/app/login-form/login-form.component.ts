import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ValidationRules } from '../shared/models/form-control.model';
import { HeaderComponent } from '../header/header.component';
import { User } from '../shared/models/account-models/index'
import { AccountService } from '../shared/services/account.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  formGroup: FormGroup;
  incorrectLogin: string;

  constructor(private formBuilder: FormBuilder, private accountService: AccountService) { 
    this.settingGroup();
  }

  private settingGroup(){
    this.formGroup = this.formBuilder.group(
      {
        login: ["", ValidationRules.loginRules],
        password: ["", ValidationRules.passwordRules]
      }
    )
  }

addUser(){
  this.accountService.login({userName:this.formGroup.value.login, 
    userPassword:this.formGroup.value.password}).subscribe(
      x => console.log(x),
      x => this.incorrectLogin = x
    )
}

  ngOnInit() {
  }

}
