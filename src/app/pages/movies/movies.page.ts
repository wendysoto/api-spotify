import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results:Observable<any>;
  searchTerm:string="";
  type: SearchType=SearchType.all;

  
  constructor(private movieService: MovieService, public authservice:AuthService, ) { 
    
  }

  ngOnInit() {    

  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
    console.log('resultado',this.results);
  }
  
  //metodo para cerrar sesión

  Onlogout(){
    this.authservice.logout();
  }
  

  

}
