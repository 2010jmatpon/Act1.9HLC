import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1: number = 0;
  num2: number = 0;
  suma: number = 0;
  resta: number = 0;
  producto: number = 0;
  division: number = 0;
  txtMensaje: string = '';
  esCorrecto: boolean = false;

  constructor() {
    this.sumar();
    this.restar();
    this.multiplicar();
    this.dividir();
  }

  sumar() {
    this.suma = this.num1 + this.num2;
    this.txtMensaje = 'El resultado es: ' + this.suma;
  }

  restar() {
    this.resta = this.num1 - this.num2;
    this.txtMensaje = 'El resultado es: ' + this.resta;
  }

  multiplicar() {
    this.producto = this.num1 * this.num2;
    this.txtMensaje = 'El resultado es: ' + this.producto;
  }

  dividir() {
    this.division = this.num1 / this.num2;
    this.txtMensaje = 'El resultado es: ' + this.division;
  }
}
