import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface CargaRecarga {
  id:number;
  saldo:number;
}

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrls: ['./recarga.component.css']
})
export class RecargaComponent {
  
  recarga={
    cui:'',
    tipo:'',
    nombre:'',
    nombre_usuario:'',
    saldo:''
  }

  enviarecarga={
    saldo:''
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.inicializarDatos();
  }

  inicializarDatos(): void {

    this.http.get('http://localhost:8080/apirest_war_exploded/paciente/cargarsaldo',{responseType:"text"} ).subscribe(
      data => {
        console.log('respuesta de carga ' + data);

        this.recarga = JSON.parse(data);

        console.log('respuesta de carga ' + data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  enviarRecarga() {
    

    console.log(this.enviarecarga.saldo)
    this.http.put('http://localhost:8080/apirest_war_exploded/paciente/recargarsaldo',this.enviarecarga.saldo, { responseType: 'text'}).subscribe(
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
