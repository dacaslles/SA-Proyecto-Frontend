import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Elector } from '../elector';

@Component({
  selector: 'app-agregar-elector',
  templateUrl: './agregar-elector.component.html',
  styleUrls: ['./agregar-elector.component.css']
})
export class AgregarElectorComponent implements OnInit {


  GrupoElector = new FormGroup({
    dpi: new FormControl(''),
    numPadron: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    fechaNacimiento: new FormControl(''),
    genero: new FormControl(''),
    direccion: new FormControl(''),
    extraDireccion: new FormControl(''),
    idMesa: new FormControl('')
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }


  onSubmit(){
    const dpi = this.GrupoElector.get('dpi').value;
    const numPadron = this.GrupoElector.get('numPadron').value;
    const nombres = this.GrupoElector.get('nombres').value;
    const apellidos = this.GrupoElector.get('apellidos').value;
    const fechaNacimiento = this.GrupoElector.get('fechaNacimiento').value;
    const genero = this.GrupoElector.get('genero').value;
    const direccion = this.GrupoElector.get('direccion').value;
    const extraDireccion = this.GrupoElector.get('extraDireccion').value;
    const idMesa = this.GrupoElector.get('idMesa').value;
    
    let datosElector = new Elector(dpi,numPadron,nombres,apellidos,fechaNacimiento,genero,direccion,extraDireccion,{"idMesa":idMesa});
    

    this.http.post('http://elecciones-sa.tk:8080/elecciones/rest/electores/',datosElector,
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
