import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {saveAs} from "file-saver-es";

@Component({
  selector: 'app-reportes-pacientes',
  templateUrl: './reportes-pacientes.component.html',
  styleUrls: ['./reportes-pacientes.component.css']
})
export class ReportesPacientesComponent {
  constructor(private http : HttpClient) {
  }
  descargaPdf(valor : string){
    this.http.post('http://localhost:8080/apirest_war_exploded/reportes/reportes-pacientes',valor,{responseType:"blob"}).subscribe(
      (blob: Blob) => {
        saveAs(blob, 'reporte.pdf');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
