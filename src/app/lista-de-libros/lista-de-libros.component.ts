import { Component, OnInit } from '@angular/core';
import { BooksInterface } from '../interfaces/books-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  //public libros:Array<BooksInterface>;
  libros:any;
  errorHttp:boolean = false;
  cargando:boolean = false;

  constructor(private http:HttpClient){
  }

  cargarLista(){
    this.http.get('assets/json/lista-de-libros.json').subscribe(
      (respuesta) => { // TRY
        //console.log(respuesta);
        this.cargando = false;
        return this.libros = respuesta;
      },
      (respuesta):boolean => { // CATCH
        //console.log(respuesta);
        return this.errorHttp = true;
      }
    )
  }

  ngOnInit(): void {
    this.cargando = true;
    this.cargarLista();
  }

}
