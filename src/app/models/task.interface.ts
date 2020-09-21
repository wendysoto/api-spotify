import { NumericValueAccessor } from '@ionic/angular';

export interface TaskI{
    id?:string;
    nombre:string;
    apellido:string;
    telefono:string;
    email:string;
    password:string;
}

export interface historialI{
    namePeli:string;   
}

export interface historialP{   
    id?:string;
    latitud:number;
    longitud:number;
    email:string;     
}