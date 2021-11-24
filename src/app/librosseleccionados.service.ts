import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosseleccionadosService {

  libros:Array<Object>

    constructor() {
      this.libros = [];
    };

  agregarLibros(_nuevoLibro:any):void{
    this.libros.push(_nuevoLibro);
  };

  mostrarLibros(){
    //this.libros.length > 0 ? return this.libros : return false
    if ( this.libros.length > 0 ) {
      return this.libros;
    } else {
      return false;
    };
  };

}
