import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {flatMap} from "rxjs";


interface Especialidad {
  nombre : String;
  descripcion : String;

  /*id: number;
  nombre: string;
  direccion: string;
  fechanacimiento: string;*/
}

interface CargaEsp {
  id:number;
  nombre : String;
  costo : number;
  descripcion : String;
}


@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements  OnInit{

  descripcionG: String ="";
  especialidad: Especialidad[] = [] ;
  cargaespecialidad: CargaEsp[] = [] ;
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

    this.http.get('http://localhost:8080/apirest_war_exploded/medicos/cargaespecialidad-especialidades',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);


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
    this.http.get('http://localhost:8080/apirest_war_exploded/medicos/cargaespecialidad-especialidad',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);


        const jsonParsed = JSON.parse(data);
        if (Array.isArray(jsonParsed)) {
          this.cargaespecialidad = jsonParsed;
        } else {
          this.cargaespecialidad = [jsonParsed];
        }

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

  modificarCosto = true;
  modificarCostoVisible = false;
  cambiarEstado(){
    this.modificarCosto = false;
    this.modificarCostoVisible = true;
  }

  cancelarEstado(){
    this.modificarCosto = true;
    this.modificarCostoVisible = false;
  }

  especialidadmedico = {
    nombre:'',
    costo:'',
    descripcion:this.descripcionG
  };

  cambiarEspecialidad = {
    costo:''
  };

  enviarEspecialidad() {
    console.log(this.especialidadmedico)
    const jsonEspecialidad = this.especialidadmedico;
    console.log(jsonEspecialidad)
    this.http.post('http://localhost:8080/apirest_war_exploded/medicos/cargaespecialidad',jsonEspecialidad, { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);
        if (respuesta === 'true') {
          alert("Especialidad Enviada")
        }
        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
  }


  cambiarCosto() {
    console.log(this.cambiarEspecialidad)
    const jsonEspecialidad = this.cambiarEspecialidad;
    console.log(jsonEspecialidad)
    this.http.post('http://localhost:8080/apirest_war_exploded/medicos//cargaespecialidad-cambiarcosto',jsonEspecialidad, { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);
        if (respuesta === 'true') {
          this.inicializarDatos();
          this.cancelarEstado();
        }
        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
