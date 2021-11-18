import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetallesComponent} from './detalles/detalles.component';
import {Error404Component} from './error404/error404.component';
import {LandingComponent} from './landing/landing.component';
import {ListaDeLibrosComponent} from './lista-de-libros/lista-de-libros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'libros',
    component:ListaDeLibrosComponent 
  },
  {
    path: 'detalles/:libroId',
    component: DetallesComponent,
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
