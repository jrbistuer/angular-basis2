import { Component, computed, OnInit, signal } from '@angular/core';
import { Header } from "../../shared/components/header/header";

@Component({
  selector: 'app-signals',
  imports: [Header],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals implements OnInit {

  counter = signal(0);

  doubleValue = computed(() => {
    console.log('Eps, counter ha canviat, recalculant doubleValue');
    return this.counter() * 2;
  });

  constructor() {
    console.log('constructor');
    console.log('Counter initial value:', this.counter());
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.counter.set(10);
    console.log('Counter initial value:', this.counter());
  }

  decreaseCounter() {
    //this.counter.set(this.counter() - 1);
    this.counter.update(value => value - 1);
  }
  
  increaseCounter() {
    //this.counter.set(this.counter() + 1);
    this.counter.update(value => value + 1);
  }

}
