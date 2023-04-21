import { NgModule } from '@angular/core';
import { routing} from "./app.routing";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarIncioComponent } from './navbars/navbar-incio/navbar-incio.component';
import { NavbarAdminComponent } from './navbars/navbar-admin/navbar-admin.component';
import { NavbarMedicoComponent } from './navbars/navbar-medico/navbar-medico.component';
import { NavbarPacienteComponent } from './navbars/navbar-paciente/navbar-paciente.component';
import { NavbarLaboratorioComponent } from './navbars/navbar-laboratorio/navbar-laboratorio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CompletarDatosComponent } from './menus/menu-medico/completar-datos/completar-datos.component';
import { HorarioComponent } from './menus/menu-medico/horario/horario.component';
import { EspecialidadComponent } from './menus/menu-medico/especialidad/especialidad.component';
import { HistorialComponent } from './menus/menu-medico/historial/historial.component';
import { ReportesMedicosComponent } from './menus/menu-medico/reportes-medicos/reportes-medicos.component';
import { MenuIncioMedicoComponent } from './menus/menu-medico/menu-incio-medico/menu-incio-medico.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarIncioComponent,
    NavbarAdminComponent,
    NavbarMedicoComponent,
    NavbarPacienteComponent,
    NavbarLaboratorioComponent,
    InicioSesionComponent,
    CompletarDatosComponent,
    HorarioComponent,
    EspecialidadComponent,
    HistorialComponent,
    ReportesMedicosComponent,
    MenuIncioMedicoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
