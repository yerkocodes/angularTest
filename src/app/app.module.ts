import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { Error404Component } from './error404/error404.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './landing/header/header.component';
import { DetallesComponent } from './detalles/detalles.component';

import { HttpClientModule } from '@angular/common/http'

import { LibrosseleccionadosService } from './librosseleccionados.service';
import { ListaDePaisesComponent } from './lista-de-paises/lista-de-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaDeLibrosComponent,
    Error404Component,
    LandingComponent,
    HeaderComponent,
    DetallesComponent,
    ListaDePaisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    LibrosseleccionadosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
