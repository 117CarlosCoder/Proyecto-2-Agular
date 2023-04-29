
import {RouterModule, Routes} from "@angular/router";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import {MenuIncioMedicoComponent} from "./menus/menu-medico/menu-incio-medico/menu-incio-medico.component";
import {MenuIncioAdminComponent} from "./menus/menu-admin/menu-incio-admin/menu-incio-admin.component";
import {MenuInicioPacienteComponent} from "./menus/menu-paciente/menu-inicio-paciente/menu-inicio-paciente.component";
import {MenuInicioLaboratorioComponent} from "./menus/menu-laboratorio/menu-inicio-laboratorio/menu-inicio-laboratorio.component";
import {RegistroComponent} from "./registro/registro.component";
import {HorarioComponent} from "./menus/menu-medico/horario/horario.component";
import {EspecialidadComponent} from "./menus/menu-medico/especialidad/especialidad.component";
import {HistorialComponent} from "./menus/menu-medico/historial/historial.component";
import {ConsultaComponent} from "./menus/menu-paciente/consulta/consulta.component";
import {ReportesComponent} from "./menus/menu-admin/reportes/reportes.component";
import {ReportesPacientesComponent} from "./menus/menu-paciente/reportes-pacientes/reportes-pacientes.component";
import {
  ReportesLaboratoriosComponent
} from "./menus/menu-laboratorio/reportes-laboratorios/reportes-laboratorios.component";
import {ReportesMedicosComponent} from "./menus/menu-medico/reportes-medicos/reportes-medicos.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'menu-inicio-medico' , component: MenuIncioMedicoComponent},
  { path: 'menu-admin' , component: MenuIncioAdminComponent},
  { path: 'menu-paciente' , component: MenuInicioPacienteComponent},
  { path: 'menu-inicio-laboratorio' , component: MenuInicioLaboratorioComponent},
  { path: 'registro' , component: RegistroComponent},
  { path: 'horario', component:HorarioComponent},
  { path: 'especialidad', component: EspecialidadComponent},
  { path: 'historial', component: HistorialComponent},
  { path: 'consulta', component: ConsultaComponent},
  { path: 'menu-inicio-paciente', component: MenuInicioPacienteComponent},
  { path: 'reportes-admin', component: ReportesComponent},
  { path: 'reportes-pacientes', component: ReportesPacientesComponent},
  { path: 'reportes-laboratorios', component: ReportesLaboratoriosComponent},
  { path: 'reportes-medicos', component: ReportesMedicosComponent},
  { path: '**', component: ErrorComponent}
];
export const routing = RouterModule.forRoot(routes);
