import { Component, OnInit } from '@angular/core';
import {historialI} from '../models/task.interface';
import { HistorialService } from '../services/historial.service';


@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  historiales:historialI[];

  constructor(private historialService:HistorialService) { }

  ngOnInit() {
    
    this.historialService.getHistoriales().subscribe(res=>this.historiales=res);
    // console.log('historial', res)
   
    
      
  }

}
