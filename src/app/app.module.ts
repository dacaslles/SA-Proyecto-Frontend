import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmisionVotoComponent } from './emision-voto/emision-voto.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaCentrosComponent } from './consulta-centros/consulta-centros.component';
import { ConsultaMesasComponent } from './consulta-mesas/consulta-mesas.component';
import { ConsultaElectoresComponent } from './consulta-electores/consulta-electores.component';
import { ModificarMesasComponent } from './modificar-mesas/modificar-mesas.component';
import { AgregarCentroComponent } from './agregar-centro/agregar-centro.component';
import { AgregarElectorComponent } from './agregar-elector/agregar-elector.component';
import { NavbarComponent } from './navbar.component';
import { VotosGeneralComponent } from './votos-general/votos-general.component';
import { VotosMunicipioComponent } from './votos-municipio/votos-municipio.component';

const appRoutes: Routes = [
  { path: 'EmisionVotos', component: EmisionVotoComponent},
  { path: 'ConsultaCentros', component: ConsultaCentrosComponent},
  { path: 'ConsultaMesas', component: ConsultaMesasComponent},
  { path: 'ModificarMesa/:id', component: ModificarMesasComponent},
  { path: 'AgregarCentro', component: AgregarCentroComponent},
  { path: 'ConsultaElectores', component: ConsultaElectoresComponent},
  { path: 'AgregarElector', component: AgregarElectorComponent},
  { path: 'VotosGeneral', component: VotosGeneralComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmisionVotoComponent,
    ConsultaCentrosComponent,
    ConsultaMesasComponent,
    ConsultaElectoresComponent,
    ModificarMesasComponent,
    AgregarCentroComponent,
    AgregarElectorComponent,
    NavbarComponent,
    VotosGeneralComponent,
    VotosMunicipioComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
