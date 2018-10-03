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

   centros;
   unCentro;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    const value = this.GrupoCentro.get('id').value;

    if(value == ''){
      this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/centros-votacion/')
      .subscribe(
        (data) => {
          this.centros = data;
          this.unCentro = true;
          //const dataString = JSON.stringify(data);
          //const dataJson = JSON.parse(dataString);
          //console.warn(dataJson);
        });
    } else {
      console.warn(this.GrupoCentro.value);
    }
  }
}
