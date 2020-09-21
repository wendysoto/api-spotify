import { Component, OnInit } from '@angular/core';
import {TaskI} from '../models/task.interface';
import {AdminService} from '../services/admin.service';
import {ActivatedRoute} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-admin-crud',
  templateUrl: './admin-crud.page.html',
  styleUrls: ['./admin-crud.page.scss'],
})
export class AdminCrudPage implements OnInit {

  todo:TaskI={
    nombre:'',
    apellido:"",
    telefono:'',
    email:'',
    password:''
  };
  uid=null;

  constructor(private route:ActivatedRoute,private nav:NavController, private adminService: AdminService, private loadingController:LoadingController) { }

  ngOnInit() {
    this.uid=this.route.snapshot.params['id'];
    if(this.uid){
      this.loadUser();
    }
  }

  async loadUser(){
    const loading=await this.loadingController.create({
      message:'Loading.....'
    });

    await loading.present();
    this.adminService.getUser(this.uid).subscribe(res=>{
      loading.dismiss();
      this.todo=res;
    });
  }


  async saveUsers(){
    const loading=await this.loadingController.create({
      message:'Guardando.....'
    });
    
    if(this.uid){
      //Update
      this.adminService.updateUser(this.todo, this.uid).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/administrador');
      })     
    }
    else{
         //crear nuevo usurio
         this.adminService.addUser(this.todo).then(()=>{
          //loading.dismiss();
          this.nav.navigateForward('/administrador');
        })     


    }

  }
  
  onRemove(idUser:string){
    console.log(idUser);
    this.adminService.removeUser(idUser);

  }

}
