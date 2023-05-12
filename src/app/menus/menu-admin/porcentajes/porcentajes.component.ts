import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


interface PorcetajeAdmin {
  id:number;
  fecha : String;
  porcentaje : number;
}

@Component({
  selector: 'app-porcentajes',
  templateUrl: './porcentajes.component.html',
  styleUrls: ['./porcentajes.component.css'],
  providers: [DatePipe]
})

export class PorcentajesComponent {

  

  porcentaje :PorcetajeAdmin[] = [];
  crearporcentaje = {
    id : null,
    fecha: this.obtenerFechaActual(),
    porcentaje:''
  }

  constructor(private http: HttpClient, private datePipe: DatePipe) {
  }
  
  
  

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos(): void {
    this.http.get('http://localhost:8080/apirest_war_exploded/admin/cargaporcentaje',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);

        this.porcentaje = JSON.parse(data);

        console.log('respuesta de carga ' + data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerFechaActual(): string {
    const fechaActual = new Date();
    return this.datePipe.transform(fechaActual, 'dd-MM-yyyy') || '';
  }

  crearPorcentaje(): void{

    const jsonEspecialidad = this.crearporcentaje;
    console.log(jsonEspecialidad)
    this.http.post('http://localhost:8080/apirest_war_exploded/admin/porcentaje',jsonEspecialidad, { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );

    window.location.reload();
  }

}
