import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-electores',
  templateUrl: './consulta-electores.component.html',
  styleUrls: ['./consulta-electores.component.css']
})
export class ConsultaElectoresComponent implements OnInit {

  GrupoElector = new FormGroup({
    id: new FormControl('')
  });

   mostrarElectores;
   electores;
   unElector;
   titulo_lista;
   resultado;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    const value = this.GrupoElector.get('id').value;
    this.mostrarElectores = false;

    if(value == ''){
      this.http.get('http://esbg5.us-e2.cloudhub.io/Grupo5/Electores/')
      .subscribe(
        (data) => {
          this.titulo_lista = "Lista de electores";
          this.mostrarElectores = true;
          this.unElector = false;
          this.electores = data;
          //const dataString = JSON.stringify(data);
          //const dataJson = JSON.parse(dataString);
          //console.warn(dataJson);
        });
    } else {
      this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/electores/' + value)
      .subscribe(
        (data) => {
          this.titulo_lista = "Información del centro";
          this.mostrarElectores = true;
          this.electores = data;
          this.unElector = true;
        },
        (error) => {
          this.mostrarElectores = false;
          this.titulo_lista = "No existe un elector con el ID indicado";
          console.warn(error);
        }
        );
      //console.warn(this.GrupoCentro.value);
    }
  }

  onDelete(){
    this.http.delete('http://elecciones-sa.tk:8080/elecciones/rest/electores/' + this.electores.idElector)
    .subscribe(
      data => {
        this.resultado = "elemento borrado correctamente";
      },
      error => {
        this.resultado = "hubo un error al borrar el elemento";
      }
    );
    //location.reload();
  }

}
