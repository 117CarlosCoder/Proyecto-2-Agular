import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent {

  constructor(private http: HttpClient, private router: Router){}
  sesionCerrada(event: Event){
    event.preventDefault();
    this.http.post('http://localhost:8080/apirest_war_exploded/usuarios/cerrar',"cerrar sesion",{responseType:"text"}).subscribe(
      (respuesta: any) => {

        if (respuesta == "false"){
          alert('Sesion Cerrada');
          this.router.navigate(['/inicio-sesion']);
        }

      console.log(respuesta);

      },
      (error) => {
        console.error(error);
      }
    );

    }
}
