import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
   resultado;
   mostrarModificar;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){

    const value = this.GrupoMesa.get('id').value;
    
    this.mostrarMesas = false;
    this.resultado = "";

    if(value == ''){
      this.http.get('http://esbg5.us-e2.cloudhub.io/Grupo5/Consulta_mesa/')
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
          console.warn(data);
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

  onDelete(){
    this.http.delete('http://elecciones-sa.tk:8080/elecciones/rest/mesas-votacion/' + this.mesas.idMesa)
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
  
  onModify(){
    this.router.navigate(['/ModificarMesa',this.mesas.idMesa]);
  }
}
