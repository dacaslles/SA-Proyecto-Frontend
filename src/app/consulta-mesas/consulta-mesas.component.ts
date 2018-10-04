import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta-mesas',
  templateUrl: './consulta-mesas.component.html',
  styleUrls: ['./consulta-mesas.component.css']
})
export class ConsultaMesasComponent implements OnInit {


  GrupoMesa = new FormGroup({
    id: new FormControl('')
  });

   mostrarMesas;
   mesas;
   unaMesa;
   titulo_lista;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    const value = this.GrupoMesa.get('id').value;
    this.mostrarMesas = false;

    if(value == ''){
      this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/mesas-votacion/')
      .subscribe(
        (data) => {
          this.titulo_lista = "Lista de mesas";
          this.mostrarMesas = true;
          this.unaMesa = false;
          this.mesas = data;
          //const dataString = JSON.stringify(data);
          //const dataJson = JSON.parse(dataString);
          //console.warn(dataJson);
        });
    } else {
      this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/mesas-votacion/' + value)
      .subscribe(
        (data) => {
          this.titulo_lista = "Información de la mesa";
          this.mostrarMesas = true;
          this.mesas = data;
          this.unaMesa = true;
        },
        (error) => {
          this.mostrarMesas = false;
          this.titulo_lista = "No existe una mesa con el ID indicado";
          console.warn(error);
        }
        );
      //console.warn(this.GrupoCentro.value);
    }
  }

}
