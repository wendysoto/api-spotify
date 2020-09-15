import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";
import {LogoutGuard} from "./guard/logout.guard";

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then( m => m.MoviesPageModule), canActivate:[AuthGuard]
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), canActivate:[LogoutGuard]
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },  
  

  { path: 'movies/:id', loadChildren: './pages/movie-details/movie-details.module#MovieDetailsPageModule' },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule), canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
