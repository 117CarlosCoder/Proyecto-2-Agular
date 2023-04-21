import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent {
  inicioVisible = true;
  constructor(private http: HttpClient, private router: Router) {
  }

  usuario = {
    correo:'',
    contraseña:''
  };




  onSubmit() {
    console.log(this.usuario.correo)
    const jsonCredenciales = JSON.stringify(this.usuario);
    this.http.post('http://localhost:8080/apirest_war_exploded/usuarios', jsonCredenciales, { responseType: 'json'}).subscribe(
      (respuesta: any) => {
        console.log(respuesta);

        const tipo = respuesta['tipo'];
        const valor = respuesta['valor'];
        if (valor && tipo === 'Paciente') {
          // Redirigir a la página de inicio de usuario
          this.router.navigate(['/navbar-paciente']);
        }
        if (valor && tipo === 'Administrador') {
          // Redirigir a la página de inicio de usuario
          this.router.navigate(['/navbar-admin']);
        }
        if (valor && tipo === 'Medico') {
          // Redirigir a la página de inicio de usuario
          this.router.navigate(['/menu-inicio-medico']);
        }
        if (valor && tipo === 'Laboratorio') {
          // Redirigir a la página de inicio de usuario
          this.router.navigate(['/navbar-laboratorio']);
        }

        // La respuesta del servidor se ha recibido correctamente
        console.log(respuesta);
      },
      (error) => {
        // Ha ocurrido un error al enviar la solicitud al servidor
        console.error(error);
      }
    );
  }
}

/*export class InicioSesionComponent {

  constructor(private http: HttpClient) {}
  user = { email: '', password: '' };


  ngOnInit() {
     this.http.post('http://localhost:8080/apirest_war_exploded/usuarios', this.user.email).subscribe(
      (respuesta) => {
        // La respuesta del servidor se ha recibido correctamente
        console.log(respuesta);
      },
      (error) => {
        // Ha ocurrido un error al enviar la solicitud al servidor
        console.error(error);
      }
    );
  }
}*/
