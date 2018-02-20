import { EventEmitter, Injectable } from '@angular/core';
import { User, LoginUser } from '../models/account-models/index';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AccountService{
    userEventEmitter: EventEmitter<User> = new EventEmitter<User>();

    isLoggedIn = {state:false};
    globalUser: User = new User();

    constructor(){
        this.userEventEmitter.subscribe(
            x => this.isLoggedIn.state = x.fullName != 'Guest'
        );
    }

    login({userName, userPassword}: LoginUser): Observable<boolean>{
        if (userName != 'Oleg')
        return _throw('Incorrect user name or password');
        this.globalUser.fullName = userName;
        this.userEventEmitter.emit(this.globalUser);
        return of (true);
    }
    logout(): Observable<boolean>{
        try{
            this.globalUser.fullName = 'Guest';
            this.globalUser.userUrlAvatar = './assets/images/guest.png';
            this.isLoggedIn.state = false;
            return of (true);
        }
        catch{
            return of (false);
        }
    }
}
