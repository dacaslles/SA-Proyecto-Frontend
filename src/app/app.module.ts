import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmisionVotoComponent } from './emision-voto/emision-voto.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaCentrosComponent } from './consulta-centros/consulta-centros.component';

const appRoutes: Routes = [
  { path: 'EmisionVotos', component: EmisionVotoComponent},
  { path: 'ConsultaCentros', component: ConsultaCentrosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmisionVotoComponent,
    ConsultaCentrosComponent
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
