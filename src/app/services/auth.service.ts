import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";


//importar firestore para guardar en la base
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'

})
export class AuthService {

  constructor(private AFauth:AngularFireAuth,private db:AngularFirestore, private router:Router) { }


  //metodo de autenticacion
  login(email:string, password:string){
    return new Promise((resolve,rejected)=>{
      this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user=>{
        resolve(user);      
      }).catch(err=>rejected(err));

    })   

  }

  
    //metodo de registro
    //en firestore

    register(email:string, password:string, nombre:string, apellido:string, telefono:string){
      return new Promise((resolve, reject)=>{
        this.AFauth.auth.createUserWithEmailAndPassword(email,password).then(res=>{
          const uid=res.user.uid;

          this.db.collection('users').doc(uid).set({
            nombre:nombre,
            apellido:apellido,
            telefono:telefono,
            password:password,
            email:email,
            uid:uid
          })
         //console.log(res.user.uid)//UID util para gurdar info sobre usuario
          resolve(res)
        }).catch(err=>reject(err))

      })
      

    }
    //METODO CERRAR SESION
    logout(){
      this.AFauth.auth.signOut().then(() =>{
        this.router.navigate(['./login']);
      })
    }

    //Obtener infomacion del usuario
    getUserAuth(){
      return(this.AFauth.authState)
    }

}
