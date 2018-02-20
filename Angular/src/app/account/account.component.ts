import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { User } from '../shared/models/account-models/user.model';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: User;
  isLoggedIn;
  switcher: string;

  constructor(private accountService:AccountService) { }

  logOut(): void{
    this.switcher = 'Logout';
    this.accountService.logout();

  }

  ngOnInit() {
    this.switcher = !this.accountService.isLoggedIn.state ? 'Login' :'Logout';
    this.user = this.accountService.globalUser;
    this.isLoggedIn = this.accountService.isLoggedIn;

    this.accountService.userEventEmitter.subscribe(x =>
      this.switcher = !this.accountService.isLoggedIn.state ? 'Login' :'Logout',
    )
  }

}
