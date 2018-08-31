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

    this.http.post('https://my-json-server.typicode.com/dacaslles/fake-json-server/votos/',
    {
      dpi: this.GrupoVoto.get('dpi').value,
      codigoPartido: this.GrupoVoto.get('codigoPartido').value
    }).subscribe(
      (data:any) => {
        console.warn(data);
      }
    );
  }
}
