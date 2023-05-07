import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface listarMedicos {
  medico : String;
  especialidad : String;
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements  OnInit{

 
  listarMedico: listarMedicos[] = [];
  enviarMedico: listarMedicos[] = [];
  mostrarSoloMedicos: boolean = false;
  opcionSeleccionada: string = "medico";



  constructor(private http: HttpClient) {
  }

  /*mostrarMedicos():void {
   if (this.mostrarSoloMedicos) {
      this.mostrarSoloMedicos = true;
      console.log(this.mostrarSoloMedicos);
   } 
   else{
      this.mostrarSoloMedicos = false;

  console.log(this.mostrarSoloMedicos);
   }

  }*/
  mostrarMedicos(): void {
    if (this.opcionSeleccionada === "medico") {
      this.mostrarSoloMedicos = false;
    } else if (this.opcionSeleccionada === "especialidad") {
      this.mostrarSoloMedicos = true;
    }
}



  ngOnInit(): void {
    this.inicializarDatos();
  }

  

  inicializarDatos(): void {

    this.http.get('http://localhost:8080/apirest_war_exploded/paciente/cargarmedicos',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);

        const jsonParsed = JSON.parse(data);
        if (Array.isArray(jsonParsed)) {
          this.listarMedico = jsonParsed;
        } else {
          this.listarMedico = [jsonParsed];
        }

        console.log('respuesta de carga ' + data);
      },
      (error) => {
        console.error(error);
      }
    );
  }


  medicoSeleccionado(){
    console.log("Este es el array de médicos: " + this.enviarMedico);
    const valor = JSON.stringify(this.enviarMedico);

    console.log(valor)
    this.http.post('http://localhost:8080/apirest_war_exploded/medicos/crearconsulta', valor , { responseType: 'text'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);
        if (respuesta) {
          
        }
        console.log(respuesta);
      },
      (error) => {
        console.error(error);
      }
    );
    
  /*medico.forEach(med => {
    console.log("Medico: ", med.medico);
    console.log("Especialidad: ", med.especialidad);
  });*/
  }

  /*cambiarCosto() {
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
  }*/

}
