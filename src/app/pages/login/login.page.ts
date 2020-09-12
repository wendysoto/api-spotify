import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Route, Router}from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email='';
  password='';
  

  constructor(private authService:AuthService, public router:Router) { }

  ngOnInit() {
  }

  //METODO DE INVIO LOGIN 
  onSubmitLogin(){
    this.authService.login(this.email, this.password).then(res=> {
      if(this.email=="wendy@gmail.com"){
        this.router.navigate(['/administrador'])
      }
      else{
        this.router.navigate(['/movies']);
      }      

    }).catch(err=>alert('Usuario o contraseña incorrecto'))
  
  } 
 
}
