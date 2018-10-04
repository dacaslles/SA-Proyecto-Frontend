import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-centros',
  templateUrl: './consulta-centros.component.html',
  styleUrls: ['./consulta-centros.component.css']
})
export class ConsultaCentrosComponent implements OnInit {

  GrupoCentro = new FormGroup({
    id: new FormControl('')
  });

   mostrarCentros;
   centros;
   unCentro;
   titulo_lista;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    const value = this.GrupoCentro.get('id').value;
    this.mostrarCentros = false;

    if(value == ''){
      this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/centros-votacion/')
      .subscribe(
        (data) => {
          this.titulo_lista = "Lista de centros de votación";
          this.mostrarCentros = true;
          this.unCentro = false;
          this.centros = data;
          //const dataString = JSON.stringify(data);
          //const dataJson = JSON.parse(dataString);
          //console.warn(dataJson);
        });
    } else {
      this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/centros-votacion/' + value)
      .subscribe(
        (data) => {
          this.titulo_lista = "Información del centro";
          this.mostrarCentros = true;
          this.centros = data;
          this.unCentro = true;
        },
        (error) => {
          this.mostrarCentros = false;
          this.titulo_lista = "No existe un centro con el ID indicado";
          console.warn(error);
        }
        );
      //console.warn(this.GrupoCentro.value);
    }
  }
}
