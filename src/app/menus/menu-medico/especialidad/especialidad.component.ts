import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Especialidad {
  nombre : String;

  /*id: number;
  nombre: string;
  direccion: string;
  fechanacimiento: string;*/
}


@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements  OnInit{
  especialidad: Especialidad[] = [] ;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  /*paciente = {
    id:'',
    nombre:'',
    direccion:'',
    fechanamcimiento:''
  };*/

  inicializarDatos(): void {

    this.http.get('http://localhost:8080/apirest_war_exploded/medicos/cargaespecialidad',{responseType:"text"} ).subscribe(
      data => {



        this.especialidad = JSON.parse(data);
        /*his.paciente.id = respuesta['id'];
        this.paciente.nombre = respuesta['nombre'];
        this.paciente.direccion = respuesta['direccion'];
        this.paciente.fechanamcimiento = respuesta['fecha_nacimiento'];*/

        console.log('respuesta de carga ' + data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
