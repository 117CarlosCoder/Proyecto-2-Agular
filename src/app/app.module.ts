import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarIncioComponent } from './navbars/navbar-incio/navbar-incio.component';
import { NavbarAdminComponent } from './navbars/navbar-admin/navbar-admin.component';
import { NavbarMedicoComponent } from './navbars/navbar-medico/navbar-medico.component';
import { NavbarPacienteComponent } from './navbars/navbar-paciente/navbar-paciente.component';
import { NavbarLaboratorioComponent } from './navbars/navbar-laboratorio/navbar-laboratorio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarIncioComponent,
    NavbarAdminComponent,
    NavbarMedicoComponent,
    NavbarPacienteComponent,
    NavbarLaboratorioComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
