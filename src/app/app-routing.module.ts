import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentoComponent } from './componentes/alimento/alimento.component';
import { DesarrolloComponent } from './componentes/desarrollo/desarrollo.component';
import { FormularComponent } from './componentes/formular/formular.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularalimentoComponent } from './componentes/tutoriales/formularalimento/formularalimento.component';
import { SeleccionComponent } from './componentes/tutoriales/seleccion/seleccion.component';
import { FormularGuard, FormularGuardGuard } from './guardianes/formular-guard.guard';

const routes: Routes=[
    {path:"",component:InicioComponent},
    {path:"formular",component:FormularComponent,canActivate:[FormularGuard]},
    {path:"formular/alimento",component:AlimentoComponent,canActivate:[FormularGuardGuard]},
    {path:"desarrollo",component:DesarrolloComponent},
    {path:"tutoriales",component:SeleccionComponent},
    {path:"tutoriales/formularalimento",component:FormularalimentoComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { 

}