import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-inicio-laboratorio',
  templateUrl: './menu-inicio-laboratorio.component.html',
  styleUrls: ['./menu-inicio-laboratorio.component.css']
})
export class MenuInicioLaboratorioComponent implements  OnInit{
  laboratorio = {
    tipo:'',
    nombre:'',
    costo:'',
    descripcion:''
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos(): void {
    this.http.get('http://localhost:8080/apirest_war_exploded/laboratorio/tipoexamen', { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log('respuesta de carga ' + respuesta);


        if (respuesta == 'true') {
          console.log('cambio de estado');
          this.cambiarEstado();
        }

        if (respuesta == 'false') {
          this.mostrarInicioExamenlab = true;
        }

        console.log('respuesta de carga ' + respuesta);
      },
      (error) => {

        console.error(error);
      }
    );
  }

  enviarDatosExamen() {
    console.log(this.laboratorio.tipo)
    const jsonInfoExamen = this.laboratorio;
    console.log(jsonInfoExamen)
    this.http.post('http://localhost:8080/apirest_war_exploded/laboratorio/tipoexamen', jsonInfoExamen, { responseType: 'text'}).subscribe(
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

  mostrarNavbarLab = false;
  mostrarNavbarInico = true;
  mostrarInicioExamenlab = false;

  cambiarEstado() {
    this.mostrarNavbarInico = false;
    this.mostrarNavbarLab = true;
  }
}
