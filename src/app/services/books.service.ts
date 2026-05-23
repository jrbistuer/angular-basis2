import { Injectable, signal } from '@angular/core';
import { IBook } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  books = signal<IBook[]>([]);

  constructor() {
    this.books.set(this.getFilteredBooks());
  }

  addBook(book: IBook) {
    book.id = this.getAllBooks().length + 1;
    const currentBooks = this.getAllBooks();
    const updatedBooks = [...currentBooks, book];
    this.setBooks(updatedBooks);
  }

  updateBook(updatedBook: IBook) {
    const currentBooks = this.getAllBooks();
    const updatedBooks = currentBooks.map(book => book.id === updatedBook.id ? updatedBook : book);
    this.setBooks(updatedBooks);
  }

  deleteBook(bookId: number) {
    const currentBooks = this.getAllBooks();
    const updatedBooks = currentBooks.map(book => book.id === bookId ? { ...book, active: false } : book);
    this.setBooks(updatedBooks);
  }

  private getAllBooks() {
    return JSON.parse(localStorage.getItem('books') || '[]') as IBook[];
  }

  private getFilteredBooks() {
    const allbooks = JSON.parse(localStorage.getItem('books') || '[]') as IBook[];
    return allbooks.filter(book => book.active);
  }

  private setBooks(books: IBook[]) {
    localStorage.setItem('books', JSON.stringify(books));
    this.books.set(books.filter(book => book.active));
  };

}
