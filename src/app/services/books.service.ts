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

  getAllBooks() {
    return JSON.parse(localStorage.getItem('books') || '[]') as IBook[];
  }

  getBooks() {
    const activeBooks = this.getAllBooks().filter(book => book.active);
    return activeBooks.filter(book => book.active);
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
    const updatedBooks = currentBooks.map(book => book.id === bookId ? { ...book, active: false } : book);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    this.books.set(this.getBooks());
  }

}
