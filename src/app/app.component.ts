import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './service/auth.service';
import { TokenStorageService } from './service/token-storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // form: any = {};
  isLoggedIn: any;
  // isLoginFailed = false;
  // errorMessage = '';
  // userlist: any;
  // roles: string[] = [];
  // tokenStorage: any;
  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }

  }

  constructor(private router: Router, private tokenService: TokenStorageService) {
    let status =  localStorage.getItem("login_status"); //tokenService.getLoginStatus();

    if(status === undefined){
      this.isLoggedIn = false;
    } else 
     { this.isLoggedIn = status;
    }
    console.log(status  + "  " + this.isLoggedIn);
    if (this.isLoggedIn) {
      this.router.navigateByUrl('/admin');
    } else       if (!this.isLoggedIn) {
        this.router.navigateByUrl('/login');
      }
  }  
}
