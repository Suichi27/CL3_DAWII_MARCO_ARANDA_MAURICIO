import { Component } from '@angular/core';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent {

  pago = {
    hora: null,
    precio: 1500,

    total:0

  }

  resultado=""

  calcular(){
    this.pago.total= ((Number(this.pago.hora) * Number(this.pago.precio)) )
    this.resultado = "Su promedio es  :" + this.pago.total
  }

}
