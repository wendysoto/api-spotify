import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../models/task.interface';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private userCollection: AngularFirestoreCollection<TaskI>;
  private usuarios: Observable<TaskI[]>;



  constructor(db:AngularFirestore) { 
    this.userCollection = db.collection<TaskI>('users');
    this.usuarios = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  getUsurios(){
    return this.usuarios;
  }

  getUser(id: string){
    return this.userCollection.doc<TaskI>(id).valueChanges();
  }

  updateUser(todo:TaskI, id: string){
    return this.userCollection.doc(id).update(todo);
  }
  
  addUser(todo: TaskI){
    return this.userCollection.add(todo);
  }
  
  removeUser(id: string){
    return this.userCollection.doc(id).delete();
  }

}
