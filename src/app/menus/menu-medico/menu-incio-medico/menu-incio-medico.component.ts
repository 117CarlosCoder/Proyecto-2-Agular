import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


interface Especialidades {
  nombre : String;
  descripcion : String;

  /*id: number;
  nombre: string;
  direccion: string;*/
}

@Component({
  selector: 'app-menu-incio-medico',
  templateUrl: './menu-incio-medico.component.html',
  styleUrls: ['./menu-incio-medico.component.css']
})

export class MenuIncioMedicoComponent implements  OnInit {
  horauno :string = '';
  horados :string = '';
  especialidades: Especialidades[] = [] ;
  horas: string = '';

  especialidad = {
    costo:'',
    nombre:'',
    descripcion:'',
    hora: ''
  };


  constructor(private http: HttpClient) {
  
  }

  ngOnInit(): void {
    this.horauno = '';
    this.horados = '';
    this.horas = '';
    this.inicializarDatos();
  }

  enviarHoras() {
    this.horas = this.horauno + " - " + this.horados;
    this.especialidad.hora = this.horas;
    if (!this.especialidad.hora || !this.horauno || !this.horados) {
      return;
    }
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

    this.http.get('http://localhost:8080/apirest_war_exploded/medicos/cargaespecialidad-especialidades',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);


        this.especialidades = JSON.parse(data);

        /*this.paciente.id = respuesta['id'];
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

  enviarEspecialidad() {
    if (!this.especialidad.nombre) {
      alert("Seleccione una especialidad");
      return;
    }
    if (!this.especialidad.costo) {
      alert("Ingrese precio por favor");
      return;
    }
    
    
    this.enviarHoras()
    if (!this.especialidad.hora || !this.horauno || !this.horados) {
      alert("Ingrese horario por favor");
      return;
    }
    console.log("el nombre es = " + this.especialidad.nombre)
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
