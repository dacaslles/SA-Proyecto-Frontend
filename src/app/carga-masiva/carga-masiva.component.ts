import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css']
})
export class CargaMasivaComponent implements OnInit {


  GrupoCarga = new FormGroup({
    tipo: new FormControl(''),
    texto: new FormControl('')
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    const tipo = this.GrupoCarga.get('tipo').value;
    let texto: string = this.GrupoCarga.get('texto').value;
    let url: string;

    if(tipo == "electores")
      url = "http://elecciones-sa.tk:8080/elecciones/rest/electores/carga/";
    else if(tipo == "mesas")
      url = "http://elecciones-sa.tk:8080/elecciones/rest/mesas-votacion/carga/";
    else if(tipo == "votos")
      url = "";

    this.http.post(url,texto,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
    .subscribe(
      (data: any) => { 
        if(data.esError)
          alert(data.mensaje);
        else
          alert(data.mensaje);
      },
      error => { alert(error.error.mensaje); }
    );
  }

}
