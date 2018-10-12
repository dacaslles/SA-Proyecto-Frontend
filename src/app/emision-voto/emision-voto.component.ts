import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emision-voto',
  templateUrl: './emision-voto.component.html',
  styleUrls: ['./emision-voto.component.css']
})
export class EmisionVotoComponent implements OnInit {

  GrupoVoto = new FormGroup({
    dpi: new FormControl(''),
    codigoPartido: new FormControl('')
  });

  FormularioVoto = this.fb.group({
    dpi: [''],
    codigoPartido: ['']
  });

  

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.GrupoVoto.value);
    console.warn(this.GrupoVoto.get('dpi').value);

    this.http.post('http://elecciones-sa.tk:8080/elecciones/rest/votos/emitir-voto',
    {
      dpi: this.GrupoVoto.get('dpi').value,
      partido: this.GrupoVoto.get('codigoPartido').value
    }).subscribe(
      (data) => {
        const dataString = JSON.stringify(data);
        const dataJson = JSON.parse(dataString);
        console.warn(dataJson.id);
      }
    );
  }
}
