
import {RouterModule, Routes} from "@angular/router";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import {MenuIncioMedicoComponent} from "./menus/menu-medico/menu-incio-medico/menu-incio-medico.component";

const routes: Routes = [
  { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'menu-inicio-medico' , component: MenuIncioMedicoComponent}
];
export const routing = RouterModule.forRoot(routes);
