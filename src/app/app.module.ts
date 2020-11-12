import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './componentes/main/main.component';
import { materiaPrimaDB } from './servicios/materiaPrima.service';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './componentes/header/header.component';
import { SectionComponent } from './componentes/section/section.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormularComponent } from './componentes/formular/formular.component';
import { AlimentoComponent } from './componentes/alimento/alimento.component';
import { FormularGuardGuard } from './guardianes/formular-guard.guard';
import { DesarrolloComponent } from './componentes/desarrollo/desarrollo.component';
import { SeleccionComponent } from './componentes/tutoriales/seleccion/seleccion.component';
import { FormularalimentoComponent } from './componentes/tutoriales/formularalimento/formularalimento.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SectionComponent,
    InicioComponent,
    FormularComponent,
    AlimentoComponent,
    DesarrolloComponent,
    SeleccionComponent,
    FormularalimentoComponent
    //se agrego personascom.. y automatiamente se agrego el import por lso plougings
  ],//para usar los componentes deben ser agregados dentro de app.component.html
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [materiaPrimaDB,FormularGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
