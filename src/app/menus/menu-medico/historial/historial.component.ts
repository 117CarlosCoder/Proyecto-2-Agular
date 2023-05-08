import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface CargaPac {
  paciente:number;
  fecha_inicio : String;
  fecha_fin : String;
  estado : String;
  porcentaje: number;
  costo: number;
  medico: String;
  especialidad:String;
}

interface CargaPacExam {
  paciente:number;
  fecha_solicitud : String;
  fecha_fin : String;
  laboratorio: String;
  estado:String;
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent {
  

  cargarpaciente: CargaPac[] = [] ;
  cargarpacientexam: CargaPacExam[] = [] ;
  id:String = '';

  constructor(private http: HttpClient) {
  }

  onSearch(event: any) {
    this.cargarPaciente();
  }


  cargarPaciente(){
    const valorid = this.id;
    console.log(valorid)
    this.http.post('http://localhost:8080/apirest_war_exploded/medicos/cargaconsulta',valorid,{responseType:"text"}).subscribe(
    data => {
      console.log('respuesta de carga ' + data);


      const jsonParsed = JSON.parse(data);
      if (Array.isArray(jsonParsed)) {
        this.cargarpaciente = jsonParsed;
      } else {
        this.cargarpaciente = [jsonParsed];
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

  this.http.post('http://localhost:8080/apirest_war_exploded/medicos/cargaexamenes',valorid,{responseType:"text"}).subscribe(
    data => {
      console.log('respuesta de carga ' + data);


      const jsonParsed = JSON.parse(data);
      if (Array.isArray(jsonParsed)) {
        this.cargarpacientexam = jsonParsed;
      } else {
        this.cargarpacientexam = [jsonParsed];
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

}
