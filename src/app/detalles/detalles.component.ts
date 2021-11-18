import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BooksInterface } from '../interfaces/books-interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  public libros:Array<BooksInterface>;

  // "ActivatedRoute" nos permite acceder a la informacion ubicada en la URL.
  constructor(private ruta:ActivatedRoute){

    this.libros = [
      { id: '1',titulo:'Papelucho', autor:'Marcela Paz' },
      { id: '2',titulo:'Narnia', autor:'C. S. Lewis' },
      { id: '3',titulo:'Lord of the Rings', autor:'J. R. R. Tolkien' },
      { id: '4',titulo:'Game of Thrones', autor:'George R. R. Martin' },
      { id: '5',titulo:'Papelucho', autor:'Marcela Paz' },
      { id: '6',titulo:'Narnia', autor:'C. S. Lewis' },
      { id: '7',titulo:'Lord of the Rings', autor:'J. R. R. Tolkien' },
      { id: '8',titulo:'Game of Thrones', autor:'George R. R. Martin' },
      { id: '9',titulo:'Papelucho', autor:'Marcela Paz' },
      { id: '10',titulo:'Narnia', autor:'C. S. Lewis' },
      { id: '11',titulo:'Lord of the Rings', autor:'J. R. R. Tolkien' },
      { id: '12',titulo:'Game of Thrones', autor:'George R. R. Martin' },
    ]
  }

  libroId:any;
  libroSeleccionado:any;

  //"ngOnInit" se ejecuta al momento que se inicializa nuestro componente.
  ngOnInit(): void {
    this.libroId = this.ruta.snapshot.paramMap.get('libroId');
    console.log(this.libroId);
    this.libroSeleccionado = this.encontrarLibro(); // Esta variable contiene los datos para mostrarlos en el html.
    console.log(this.libroSeleccionado)
  };

  encontrarLibro() {
    let libroEncontrado = this.libros.filter((libro) => {
      return libro.id === this.libroId;
    })
    return libroEncontrado[0];
  };


}
