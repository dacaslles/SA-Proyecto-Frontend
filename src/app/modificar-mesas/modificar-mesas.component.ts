import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Mesa } from '../mesa';

@Component({
  selector: 'app-modificar-mesas',
  templateUrl: './modificar-mesas.component.html',
  styleUrls: ['./modificar-mesas.component.css']
})
export class ModificarMesasComponent implements OnInit {

  GrupoMesa = new FormGroup({
    id: new FormControl(''),
    numMesa: new FormControl(''),
    cantNulos: new FormControl(''),
    cantBlancos: new FormControl('')
  });

  public idMesa;
  public mesa;

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.idMesa = id;
    this.http.get('http://esbg5.us-e2.cloudhub.io/Grupo5/Modificar_Mesa/' + this.idMesa)
    .subscribe(
      (data) => {
        this.mesa = data;
        console.warn(data);
      },
      (error) => {
        console.warn(error);
      }
      );
  }

  onSubmit(){
    const numMesa = this.GrupoMesa.get('numMesa').value;
    const cantNulos = this.GrupoMesa.get('cantNulos').value;
    const cantBlancos = this.GrupoMesa.get('cantBlancos').value;
    
    let datosMesa = new Mesa(this.mesa.id,numMesa,cantNulos,cantBlancos,{"idCentro":1});
    

    this.mesa.numMesa = numMesa;

    this.http.put('http://esbg5.us-e2.cloudhub.io/Grupo5/Modificar_Mesa/'+this.mesa.idMesa,datosMesa,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
    .subscribe(
      data => { console.warn("succesful"); },
      error => { console.warn(JSON.stringify(error)); }
    );
  }
}
