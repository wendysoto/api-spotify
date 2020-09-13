import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(public authservice:AuthService) { }

  ngOnInit() {
  }
  Onlogout(){
    this.authservice.logout();

  }
  

}
