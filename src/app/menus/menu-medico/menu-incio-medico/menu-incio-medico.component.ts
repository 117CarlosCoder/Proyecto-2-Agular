import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu-incio-medico',
  templateUrl: './menu-incio-medico.component.html',
  styleUrls: ['./menu-incio-medico.component.css']
})
export class MenuIncioMedicoComponent implements  OnInit {
  especialidad = {
    costo:'',
    nombre:'',
    descripcion:''
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
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
        // La respuesta del servidor se ha recibido correctamente
        console.log('respuesta de carga ' + respuesta);
      },
      (error) => {
        // Ha ocurrido un error al enviar la solicitud al servidor
        console.error(error);
      }
    );
  }

  enviarEspecialidad() {
    console.log(this.especialidad.nombre)
    const jsonEspecialidad = this.especialidad;
    console.log(jsonEspecialidad)
    this.http.post('http://localhost:8080/apirest_war_exploded/medicos/especialidad', jsonEspecialidad, { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);


        if (respuesta === 'true') {
          console.log('cambio de estado');
          this.cambiarEstado();

        }
        // La respuesta del servidor se ha recibido correctamente
        console.log(respuesta);
      },
      (error) => {
        // Ha ocurrido un error al enviar la solicitud al servidor
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
