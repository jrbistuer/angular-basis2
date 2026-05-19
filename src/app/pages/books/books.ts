import { Component, inject } from '@angular/core';
import { Header } from "../../shared/components/header/header";
import { BooksService } from '../../services/books.service';
import { IBook } from '../../model/interfaces';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [Header, FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books {

  booksService = inject(BooksService);

  formBuilder: FormBuilder = inject(FormBuilder);

  formBooks = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    author: ['', [Validators.required]],
    publishedDate: [''],
    isbn: [''],
    language: [''],
    publisher: [''],
    pages: ['']
  });

  newBookTitle = '';
  newBookAuthor = '';

  addBook() {
    console.log(this.formBooks);
    if (this.formBooks.valid) {
      const newBook: IBook = {
        id: this.booksService.books.length + 1,
        title: this.newBookTitle,
        author: this.newBookAuthor,
        publishedDate: new Date().getFullYear(),
        isbn: 'N/A',
        language: 'N/A',
        publisher: 'N/A',
        pages: 0,
      }
      console.log(newBook);
    }
  }
    
}
