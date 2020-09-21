import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {TaskI} from '../models/task.interface';
import {AdminService} from '../services/admin.service';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {
  usuarios:TaskI[];

  constructor(public authservice:AuthService, private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.getUsurios().subscribe(res=>
      //console.log('Tareas', res);
      this.usuarios=res
    );
  }



  Onlogout(){
    this.authservice.logout();

  }
  

}
