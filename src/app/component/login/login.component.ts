import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { TokenStorageService } from '../../service/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userlist: any;
  roles: string[] = [];
  tokenStorage: any;
  ngOnInit(): void {

  }

  constructor(private authService: AuthService, private router: Router, private tsServicetorageService: TokenStorageService) {
    this.tokenStorage = tsServicetorageService
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.setLoginStatus(true);
        localStorage.setItem("login_status", "true");
        this.userlist = data;
        console.log(this.userlist)
        localStorage.setItem("role", this.userlist.roles);
        localStorage.setItem("father_id",data.username);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        localStorage.setItem("adminname", data.first_name)
        console.log(this.userlist)
        this.router.navigateByUrl('/admin');
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
