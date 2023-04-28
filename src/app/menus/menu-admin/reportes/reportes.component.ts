import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {saveAs} from "file-saver-es";

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  constructor(private http : HttpClient) {
  }

  descargaPdf(valor : string){
    this.http.post('http://localhost:8080/apirest_war_exploded/usuarios/reportes-administrador',valor,{responseType:"blob"}).subscribe(
      (blob: Blob) => {
        saveAs(blob, 'reporte.pdf');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
