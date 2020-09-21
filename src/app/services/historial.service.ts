import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { MergeMapSubscriber } from 'rxjs/internal/operators/mergeMap';
import { map } from 'rxjs/operators';
import { historialI } from '../models/task.interface';
import { historialP } from '../models/task.interface';
@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private historialCollection: AngularFirestoreCollection<historialI>;

  private historiales: Observable<historialI[]>;

  constructor( db:AngularFirestore,) { 
    this.historialCollection = db.collection<historialI>('historial');

    this.historiales = this.historialCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }
  
  getHistoriales(){
    return this.historiales;
  }

  getHistorial(id: string){
    return this.historialCollection.doc<historialI>(id).valueChanges();
  }

  
  /*
  addHistorial(todo: historialI){
    return this.historialCollection.add(todo);
  }
  
  removeHist(id: string){
    return this.historialCollection.doc(id).delete();
  }*/

  
}
