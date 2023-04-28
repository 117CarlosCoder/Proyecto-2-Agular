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
import { HorarioComponent } from './menus/menu-medico/horario/horario.component';
import { EspecialidadComponent } from './menus/menu-medico/especialidad/especialidad.component';
import { HistorialComponent } from './menus/menu-medico/historial/historial.component';
import { ReportesMedicosComponent } from './menus/menu-medico/reportes-medicos/reportes-medicos.component';
import { MenuIncioMedicoComponent } from './menus/menu-medico/menu-incio-medico/menu-incio-medico.component';
import { MenuIncioAdminComponent } from './menus/menu-admin/menu-incio-admin/menu-incio-admin.component';
import { MenuInicioPacienteComponent } from './menus/menu-paciente/menu-inicio-paciente/menu-inicio-paciente.component';
import { MenuInicioLaboratorioComponent } from './menus/menu-laboratorio/menu-inicio-laboratorio/menu-inicio-laboratorio.component';
import { RegistroComponent } from './registro/registro.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { ConsultaComponent } from './menus/menu-paciente/consulta/consulta.component';
import { ReportesComponent } from './menus/menu-admin/reportes/reportes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarIncioComponent,
    NavbarAdminComponent,
    NavbarMedicoComponent,
    NavbarPacienteComponent,
    NavbarLaboratorioComponent,
    InicioSesionComponent,
    HorarioComponent,
    EspecialidadComponent,
    HistorialComponent,
    ReportesMedicosComponent,
    MenuIncioMedicoComponent,
    MenuIncioAdminComponent,
    MenuInicioPacienteComponent,
    MenuInicioLaboratorioComponent,
    RegistroComponent,
    CerrarSesionComponent,
    ConsultaComponent,
    ReportesComponent
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
