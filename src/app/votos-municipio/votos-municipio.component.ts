import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-votos-municipio',
  templateUrl: './votos-municipio.component.html',
  styleUrls: ['./votos-municipio.component.css']
})
export class VotosMunicipioComponent implements OnInit {

  titulo_lista = "Votos por Departamento/Municipio";
  partidosArr: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://35.229.27.131:1337/ws/rest/votos/dm/').toPromise()
    .then(
      (data:any) => {
        this.partidosArr = data.objRespuesta.votos;
        console.warn(data);
        
      });
  }

}
