import { Injectable, signal } from '@angular/core';
import { IBook } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  books = signal<IBook[]>([]);

  constructor() {
    const storedBooks = this.getBooks();
    this.books.set(storedBooks);
  }

  getBooks() {
    return localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')!) : [];
  }

  addBook(book: IBook) {
    const currentBooks = this.books();
    const updatedBooks = [...currentBooks, book];
    this.books.set(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }

  updateBook(updatedBook: IBook) {
    const currentBooks = this.books();
    const updatedBooks = currentBooks.map(book => book.id === updatedBook.id ? updatedBook : book);
    this.books.set(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }

  deleteBook(bookId: number) {
    const currentBooks = this.books();
    const updatedBooks = currentBooks.filter(book => book.id !== bookId);
    this.books.set(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  }

}
