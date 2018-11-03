import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Centro } from '../centro';

@Component({
  selector: 'app-agregar-centro',
  templateUrl: './agregar-centro.component.html',
  styleUrls: ['./agregar-centro.component.css']
})
export class AgregarCentroComponent implements OnInit {

  GrupoCentro = new FormGroup({
    nombre: new FormControl(''),
    direccion: new FormControl(''),
    extraDireccion: new FormControl(''),
    municipio: new FormControl('')
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    const nombre = this.GrupoCentro.get('nombre').value;
    const direccion = this.GrupoCentro.get('direccion').value;
    const extraDireccion = this.GrupoCentro.get('extraDireccion').value;
    const municipio = this.GrupoCentro.get('municipio').value;
    
    let datosCentro = new Centro(nombre,direccion,extraDireccion,{"idMunicipio":municipio});
    

    this.http.post('http://elecciones-sa.tk:8080/elecciones/rest/centros-votacion/',datosCentro,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
    .subscribe(
      data => { alert("Agregado correctamente"); },
      error => { alert(error.error.mensaje); }
    );
  }
}
