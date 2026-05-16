import { Component } from '@angular/core';
import { Header } from "../../shared/components/header/header";

@Component({
  selector: 'app-books',
  imports: [Header],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books {}
