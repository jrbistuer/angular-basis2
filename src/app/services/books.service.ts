import { Injectable } from '@angular/core';
import { IBook } from '../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  books: IBook[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedDate: 1925, isbn: '978-0-7432-7356-5', pages: 180, language: 'English', publisher: 'Scribner' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedDate: 1960, isbn: '978-0-06-112008-4', pages: 281, language: 'English', publisher: 'J. B. Lippincott & Co.' },
    { id: 3, title: '1984', author: 'George Orwell', publishedDate: 1949, isbn: '978-0-452-28423-4', pages: 328, language: 'English', publisher: 'Secker & Warburg' },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', publishedDate: 1932, isbn: '978-0-06-085052-4', pages: 311, language: 'English', publisher: 'Chatto & Windus' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J. D. Salinger', publishedDate: 1951, isbn: '978-0-316-76948-0', pages: 277, language: 'English', publisher: 'Little, Brown and Company' },
    { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', publishedDate: 1813, isbn: '978-0-14-143951-8', pages: 432, language: 'English', publisher: 'T. Egerton' },
    { id: 7, title: 'Don Quixote', author: 'Miguel de Cervantes', publishedDate: 1605, isbn: '978-0-06-093434-8', pages: 1023, language: 'Spanish', publisher: 'Francisco de Robles' },
    { id: 8, title: 'The Alchemist', author: 'Paulo Coelho', publishedDate: 1988, isbn: '978-0-06-112241-5', pages: 197, language: 'Portuguese', publisher: 'HarperCollins' },
    { id: 9, title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', publishedDate: 1943, isbn: '978-0-15-646511-4', pages: 96, language: 'French', publisher: 'Reynal & Hitchcock' },
    { id: 10, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publishedDate: 1866, isbn: '978-0-14-044913-6', pages: 671, language: 'Russian', publisher: 'The Russian Messenger' },
    { id: 11, title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', publishedDate: 1967, isbn: '978-0-06-088328-7', pages: 417, language: 'Spanish', publisher: 'Editorial Sudamericana' },
    { id: 12, title: 'Moby-Dick', author: 'Herman Melville', publishedDate: 1851, isbn: '978-0-14-243723-0', pages: 654, language: 'English', publisher: 'Harper & Brothers' },
    { id: 13, title: 'The Odyssey', author: 'Homer', publishedDate: -800, isbn: '978-0-14-026886-7', pages: 541, language: 'Greek', publisher: 'Penguin Classics' },
    { id: 14, title: 'Frankenstein', author: 'Mary Shelley', publishedDate: 1818, isbn: '978-0-14-143947-1', pages: 280, language: 'English', publisher: 'Lackington, Hughes, Harding, Mavor & Jones' },
    { id: 15, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', publishedDate: 1880, isbn: '978-0-374-52837-7', pages: 796, language: 'Russian', publisher: 'The Russian Messenger' },
  ];

}
