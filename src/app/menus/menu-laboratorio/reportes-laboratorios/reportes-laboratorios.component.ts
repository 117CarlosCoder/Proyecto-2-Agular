import { Component } from '@angular/core';
import {saveAs} from "file-saver-es";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reportes-laboratorios',
  templateUrl: './reportes-laboratorios.component.html',
  styleUrls: ['./reportes-laboratorios.component.css']
})
export class ReportesLaboratoriosComponent {

  constructor(private http : HttpClient) {
  }

  descargaPdf(valor : string){
    this.http.post('http://localhost:8080/apirest_war_exploded/reportes/reportes-laboratorios',valor,{responseType:"blob"}).subscribe(
      (blob: Blob) => {
        saveAs(blob, 'reporte.pdf');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
