import { Component, inject } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { BooksService } from '../../services/books.service';
import { IBook } from '../../model/interfaces';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BookForm } from '../../shared/components/book-form/book-form';

@Component({
  selector: 'app-books',
  imports: [Header, FormsModule, ReactiveFormsModule, JsonPipe, BookForm],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books {

  booksService = inject(BooksService); // Servei injectat; comparteix el signal books amb tota l'app

  selectedBook: IBook | null = null; // EL book seleccionat per editar, i que es passa com a Input al BookForm
  addBook(newBook: IBook) {
    console.log('Book received in Books page:', newBook);
    this.booksService.addBook(newBook);
  }

  editBook(book: IBook) {
    this.selectedBook = book;
  }

  updateBook(updatedBook: IBook) {
      this.booksService.updateBook(updatedBook);
  }

}
