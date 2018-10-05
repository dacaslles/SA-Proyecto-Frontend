import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
    this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/mesas-votacion/' + this.idMesa)
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
    const numMesa = this.GrupoMesa.get('numMesa');
    const cantNulos = this.GrupoMesa.get('cantNulos');
    const cantBlancos = this.GrupoMesa.get('cantBlancos');

    this.http.put('http://elecciones-sa.tk:8080/elecciones/rest/mesas-votacion/'+this.mesa.idMesa,
      {
        "idMesa": this.mesa.idMesa,
        "numMesa": numMesa,
        "cantNulos": cantNulos,
        "cantBlancos": cantBlancos,
        "centroVotacion": {"idCentro": 1}
      })
    .subscribe(
      data => { console.log("succesful"); },
      error => { console.warn(error); }
    );
  }
}
