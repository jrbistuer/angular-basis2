import { Injectable, signal } from '@angular/core';
import { IBook } from '../model/interfaces';

@Injectable({
  providedIn: 'root', // Singleton: una sola instància compartida per tota l'app
})
export class BooksService {

  // Signal: estat de les dades relacionades amb Book; els components que s'hi subscriuen es re-renderitzen automàticament
  books = signal<IBook[]>([]);

  constructor() {
    this.books.set(this.getFilteredBooks()); // Inicialitza el signal amb les dades persistides al localStorage
  }
  
  // En aquest servei, la persistència es fa mitjançant localStorage, però podria ser una crida HTTP a un backend real

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
    this.books.set(books.filter(book => book.active)); // Actualitza el signal: tots els consumers es notifiquen
  };

}
