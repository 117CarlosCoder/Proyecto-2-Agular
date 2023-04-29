import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario = {
    cui:'',
    tipo:'',
    nombre:'',
    nombre_usuario:'',
    contraseña:'',
    direccion:'',
    correo:'',
    fecha_nacimiento:'',
    saldo:0
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  enviarDatos() {
    console.log(this.usuario.correo)
    const jsonDatos = this.usuario;
    console.log(jsonDatos)
    this.http.post('http://localhost:8080/apirest_war_exploded/usuarios/crear', jsonDatos,{responseType:'text'}).subscribe(
      (respuesta: any) => {
        if(respuesta == 'Usuario Creado'){
          this.router.navigate(['/inicio-sesion']);
          alert('Usuario Creado');
        }
        else {
          alert('no se ha podido crear el usuario');
        }
        console.log(respuesta);
      },
      (error) => {
        // Ha ocurrido un error al enviar la solicitud al servidor
        console.error(error);
        alert('no se ha podido crear el usuario');

      }
    );
  }

}
