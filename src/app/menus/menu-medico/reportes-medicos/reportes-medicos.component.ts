import { Component } from '@angular/core';
import {saveAs} from "file-saver-es";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reportes-medicos',
  templateUrl: './reportes-medicos.component.html',
  styleUrls: ['./reportes-medicos.component.css']
})
export class ReportesMedicosComponent {

  constructor(private http : HttpClient) {
  }
  descargaPdf(valor : string){
    this.http.post('http://localhost:8080/apirest_war_exploded/reportes/reportes-medicos',valor,{responseType:"blob"}).subscribe(
      (blob: Blob) => {
        saveAs(blob, 'reporte.pdf');
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
