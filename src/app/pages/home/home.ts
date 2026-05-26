import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IBook } from '../../model/interfaces';
import { BookForm } from '../../shared/components/book-form/book-form';

@Component({
  selector: 'app-home',
  imports: [Header, MatCardModule, MatButtonModule, BookForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  searchBook(book: IBook) {
    console.log('Searching for book:', book.title);
    // Aquí puedes implementar la lógica para buscar el libro por su título
    // LOGIC LOGIC LOGIC.....
  }

}
