import { Component, OnInit } from '@angular/core';
import { User } from './../shared/models/account-models/index';
import { AccountService } from '../shared/services/account.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  userInfo: User;

  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.userInfo = this.accountService.globalUser;
    this.userInfo.fullName = "Guest";
    this.userInfo.userUrlAvatar = './assets/images/guest.png';

    this.accountService.userEventEmitter.subscribe(
      x => 
      {this.userInfo.fullName = x.fullName;
      this.userInfo.userUrlAvatar = x.userUrlAvatar}
    )
  }
}
