import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
  erDNI = '^[0-9]{8}[A-Za-z]$';
  mostrarError: string = "";
  mostrarError2: string = "";


  EnviarDatos(nombre, DNI, mensaje){
    if(nombre.value==""){
      alert("El nombre esta vacio.");
    }

    if(!DNI.match(this.erDNI)){
      this.mostrarError2 = "DNI Incorrecto";
    }
    if(mensaje.length<30){
      this.mostrarError="El texto introducido es demasiado corto";
    }

  }

  constructor() { }

  ngOnInit(): void {

  }



}
