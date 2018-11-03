import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-votos-edad',
  templateUrl: './votos-edad.component.html',
  styleUrls: ['./votos-edad.component.css']
})
export class VotosEdadComponent implements OnInit {

  titulo_lista = "Votos por Edad/Genero";
  partidosArr: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://35.229.27.131:1337/ws/rest/votos/deg').toPromise()
    .then(
      (data:any) => {
        this.partidosArr = data.objRespuesta.votosPartido;
        console.warn(data);
        
      });
  }

}
