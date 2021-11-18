import { Component, OnInit } from '@angular/core';
import { BooksInterface } from '../interfaces/books-interface';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {


  public libros:Array<BooksInterface>;

  constructor(){

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

  mostrarAutor(_autor:BooksInterface){
    alert(`El autor es: ${_autor.autor}`);
    console.log(typeof(_autor));
  }


  ngOnInit(): void {
  }

}
