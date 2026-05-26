import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IBook } from '../../../model/interfaces';
import { JsonPipe } from '@angular/common';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss',
})
export class BookForm {

  // Inputs: dades que el component pare envia al component fill per configurar-lo o passar-li informació
  title = input('title');                    // Input: títol del formulari, configurable pel pare
  selectedBook = input<IBook | null>();      // Input: llibre a editar; null = mode creació

  // Outputs: esdeveniments que el component fill emet cap amunt perquè el pare pugui treballar-los
  onEnterButtonPressed = output<IBook>();           // Output: nou llibre creat
  onActualitzarButtonPressed = output<IBook>();     // Output: llibre modificat

  // Injecció de dependències amb inject()
  formBuilder: FormBuilder = inject(FormBuilder);
  booksService = inject(BooksService); // Servei singleton injectat

  formBooks = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    author: ['', [Validators.required]],
    publishedDate: [''],
    isbn: [''],
    language: [''],
    publisher: [''],
    pages: [0]
  });

  constructor() {
    // Effect: s'executa cada cop que el signal selectedBook() canvia de valor
    // (la diferència amb computed és que effect no retorna un valor, només executa codi, per tant no s'assigna a cap variable)
    // com computed, cada cop que un signal que llegeix canvia, s'executa automàticament; en aquest cas, 
    // cada cop que selectedBook() canvia (quan el pare selecciona un llibre per editar o el deselecciona), 
    // s'executa aquest codi per actualitzar el formulari
    effect(() => {
      const book = this.selectedBook(); // Llegeix el signal (subscripció automàtica)
      if (book) {
        this.formBooks.patchValue({
          title: book.title,
          author: book.author,
          publishedDate: book.publishedDate?.toString() ?? '',
          isbn: book.isbn,
          language: book.language,
          publisher: book.publisher,
          pages: book.pages ?? 0
        });
      } else {
        this.formBooks.reset();
      }
    });
  }

  addBook() {
    console.log(this.formBooks);
    if (this.formBooks.valid) {
      const newBook: IBook = {
        title: this.formBooks.get('title')!.value!,
        author: this.formBooks.get('author')!.value!,
        publishedDate: new Date().getTime(),
        isbn: 'N/A',
        language: 'N/A',
        publisher: 'N/A',
        pages: 0,
        active: true
      }
      console.log("book in BookForm component:", newBook);
      this.onEnterButtonPressed.emit(newBook); // Aquí fem servir l'output; s'emet un esdeveniment amb el nou llibre; el pare el capturarà i l'afegirà a la llista
      this.formBooks.reset();
    }
  }


  updateBook() {
    if (this.formBooks.valid) {
      const updatedBook: IBook = {
        id: this.selectedBook()?.id,
        title: this.formBooks.get('title')!.value!,
        author: this.formBooks.get('author')!.value!,
        publishedDate: new Date(this.formBooks.get('publishedDate')!.value!).getTime(),
        isbn: this.formBooks.get('isbn')!.value!,
        language: this.formBooks.get('language')!.value!,
        publisher: this.formBooks.get('publisher')!.value!,
        pages: this.formBooks.get('pages')!.value!,
        active: true
      };
      this.onActualitzarButtonPressed.emit(updatedBook); // Aquí fem servir l'output; s'emet un esdeveniment amb el llibre actualitzat; el pare el capturarà i l'actualitzarà a la llista
      this.formBooks.reset();
    }
  }

}
