import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'probando';
  saludo = 'Hola me ves'

  inicioVisible = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.inicioVisible = url == '/inicio-sesion'; // Oculta el sidebar si la ruta es '/login'
      }
    });
  }

}
