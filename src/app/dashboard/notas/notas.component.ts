import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  promedio = {
    numero1: null,
    numero2 : null,
    numero3 : null,
    numero4: null,
    prm:0
    
  }
resultado=""

  calcular(){
    
    this.promedio.prm= ((Number(this.promedio.numero1)*0.2 + Number(this.promedio.numero2)*0.3 + Number(this.promedio.numero3)*0.5))
    this.resultado = "Su promedio es  :" + this.promedio.prm

  }


}
