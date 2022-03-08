import { Component } from '@angular/core';
import * as users from '../../JSON/users.json';
import { loginUser ,logoutUser} from '../actions/order.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router  } from '@angular/router';
@Component({
  selector: 'login-component',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  title = 'Login';
  loginError:any="";
  psw:any="";
  uname:any="";
  userList: any = (users as any).default;

constructor(public router:Router,public store: Store<{ user: any }>) {
  }

  ngOnInit() {
    this.loginError="";
    this.psw="";
    this.uname="";
  }

  loginSubmit(){

    this.userList.map((user:any)=>{
debugger;
      if(user.userId==this.uname && user.password==this.psw)
      {
        this.store.dispatch(loginUser({user:{userId:this.uname}}));
        this.router.navigate(["/order"]);
        
      }else
      {
        this.loginError="Invalid user name or password!"
      }
    })

  }
}
