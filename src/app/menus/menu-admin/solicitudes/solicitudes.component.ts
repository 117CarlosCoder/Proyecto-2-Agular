import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface CargaEsp {
  id:number;
  cui:number;
  nombre : String;
  costo : number;
  descripcion : String;
}

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent {

  cargaespecialidad: CargaEsp[] = [] ;
  cargasexamen: CargaEsp[] = [] ;

  especialidad = {
    id:'',
    cui:'',
    nombre:'',
    costo:'',
    descripcion:''
  };

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

    this.http.get('http://localhost:8080/apirest_war_exploded/admin/solicitud-especialidad',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);


        this.cargaespecialidad = JSON.parse(data);

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

    this.http.get('http://localhost:8080/apirest_war_exploded/admin/solicitud-examenes',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);


        this.cargasexamen = JSON.parse(data);

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

  aceptarSolicitud(especialidad: CargaEsp): void{
    const jsonEspecialidad = especialidad;
    console.log(jsonEspecialidad)
    this.http.post('http://localhost:8080/apirest_war_exploded/admin/especialidad',jsonEspecialidad, { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(jsonEspecialidad.id)
    this.http.delete('http://localhost:8080/apirest_war_exploded/admin/eliminar',{ 
      params: { id: jsonEspecialidad.id }, 
      responseType: 'text'}).subscribe(
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

  aceptarSolicitudExamen(especialidad: CargaEsp): void{
    const jsonEspecialidad = especialidad;
    console.log(jsonEspecialidad)
    this.http.post('http://localhost:8080/apirest_war_exploded/admin/examen',jsonEspecialidad, { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
    console.log(jsonEspecialidad.id)
    this.http.delete('http://localhost:8080/apirest_war_exploded/admin/eliminar-examenes',{ 
      params: { id: jsonEspecialidad.id }, 
      responseType: 'text'}).subscribe(
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
  

  eliminarSolicitud(especialidad: CargaEsp){
    this.http.delete('http://localhost:8080/apirest_war_exploded/admin/eliminar',{ 
      params: { id: especialidad.id.toString() }, 
      responseType: 'text' 
    }).subscribe(
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

  eliminarSolicitudExamen(especialidad: CargaEsp){
    this.http.delete('http://localhost:8080/apirest_war_exploded/admin/eliminar-examenes',{ 
      params: { id: especialidad.id.toString() }, 
      responseType: 'text' 
    }).subscribe(
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
