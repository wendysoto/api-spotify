import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
//para historial
import { historialI } from '../../models/task.interface';
import { NavController, LoadingController, NumericValueAccessor } from '@ionic/angular';
import { HistorialService } from 'src/app/services/historial.service';
import { AuthService } from 'src/app/services/auth.service';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;

  /*//hist
  histo: historialI = {
    email: '',
    longitud: 0,
    latitud: 0,
  };*/

  email = ""
  uid = ''

  //variables para geolocalizacion
  lat: number
  lon: number
  total: string

  //variable pelicula
  namePeli: ''


  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    public authservice: AuthService,
    private nav: NavController,
    private historialService: HistorialService,
    public geolocation: Geolocation,
    private db: AngularFirestore,
  ) {

  }


  ngOnInit() {
    //GEOLOCALIZACION
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;
      console.log(this.lat);
      console.log(this.lon);
    

    //retorna info de user
    this.authservice.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.email = user.email;
      console.log('id usuario' + this.uid);
      console.log('email' + this.email);      

    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
      console.log('peli:' + this.information.Title);   

    //GUARDAR HISTORIAL  
    this.db.collection('historial').doc(this.uid).collection('peliculas').doc(this.information.Title).set({
      latitud:this.lat,
      longitud: this.lon,
      email: this.email,      
      //uid: this.uid
      //namePeli:this.information.Title,
    })

  });

  });
  });

  }//fin Oinit


  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
