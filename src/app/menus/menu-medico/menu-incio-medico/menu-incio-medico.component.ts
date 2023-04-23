import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu-incio-medico',
  templateUrl: './menu-incio-medico.component.html',
  styleUrls: ['./menu-incio-medico.component.css']
})
export class MenuIncioMedicoComponent implements  OnInit {
  horauno :string = '';
  horados :string = '';

  horas: string = '';


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.horauno = '';
    this.horados = '';
    this.horas = '';
    this.inicializarDatos();
  }
  especialidad = {
    costo:'',
    nombre:'',
    descripcion:'',
    hora: ''
  };

  enviarHoras() {
    this.horas = this.horauno + " - " + this.horados;
    this.especialidad.hora = this.horas;
    this.inicializarDatos();
  }
  inicializarDatos(): void {

    this.http.get('http://localhost:8080/apirest_war_exploded/medicos/especialidad', { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log('respuesta de carga ' + respuesta);


        if (respuesta == 'true') {
          console.log('cambio de estado');
          this.cambiarEstado();
        }

        if (respuesta == 'false') {
          this.mostrarInicioEspecialidad = true;
        }
        console.log('respuesta de carga ' + respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  enviarEspecialidad() {
    this.enviarHoras()
    console.log(this.especialidad.nombre)
    const jsonEspecialidad = this.especialidad;
    console.log(jsonEspecialidad)
    this.http.post('http://localhost:8080/apirest_war_exploded/medicos/especialidad',jsonEspecialidad, { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);


        if (respuesta === 'true') {
          console.log('cambio de estado');
          this.cambiarEstado();

        }
        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  mostrarNavbarMedico = false;
  mostrarNavbarInico = true;
  mostrarInicioEspecialidad = false;

  cambiarEstado() {
    this.mostrarNavbarInico = false;
    this.mostrarNavbarMedico = true;
  }

}
