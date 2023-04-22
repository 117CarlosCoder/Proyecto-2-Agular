
import {RouterModule, Routes} from "@angular/router";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import {MenuIncioMedicoComponent} from "./menus/menu-medico/menu-incio-medico/menu-incio-medico.component";
import {MenuIncioAdminComponent} from "./menus/menu-admin/menu-incio-admin/menu-incio-admin.component";
import {MenuInicioPacienteComponent} from "./menus/menu-paciente/menu-inicio-paciente/menu-inicio-paciente.component";
import {
  MenuInicioLaboratorioComponent
} from "./menus/menu-laboratorio/menu-inicio-laboratorio/menu-inicio-laboratorio.component";
import {RegistroComponent} from "./registro/registro.component";

const routes: Routes = [
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'menu-inicio-medico' , component: MenuIncioMedicoComponent},
  { path: 'menu-admin' , component: MenuIncioAdminComponent},
  { path: 'menu-paciente' , component: MenuInicioPacienteComponent},
  { path: 'menu-inicio-laboratorio' , component: MenuInicioLaboratorioComponent},
  { path: 'registro' , component: RegistroComponent}

];
export const routing = RouterModule.forRoot(routes);
