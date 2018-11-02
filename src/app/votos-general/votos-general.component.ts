import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from '@angular/core/src/render3/instructions';
import { timer } from 'rxjs';

@Component({
  selector: 'app-votos-general',
  templateUrl: './votos-general.component.html',
  styleUrls: ['./votos-general.component.css']
})
export class VotosGeneralComponent implements OnInit {

  LineChart = [];
  result: any[];
  arrLabels: String[];
  arrValues: Number[];
  total: Number;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://elecciones-sa.tk:8080/elecciones/rest/votos/resultados/').toPromise()
    .then(
      (data:any[]) => {
        this.result = data;
        console.warn(data);
        
        let i = 0;
        this.arrLabels = new Array();
        this.arrValues = new Array();
        
        this.result.forEach(element => {
          this.arrLabels.push(element.nombre);
          this.arrValues.push(element.cantidad);
        });
        
        this.arrLabels.pop();
        this.total = this.arrValues.pop();
        /*for(i=0; i<this.result.length; i++){
          
          this.arrLabels.push(this.result[i].nombre);
          this.arrValues.push(this.result[i].cantidad);

        }*/
        this.fillChart();
        
      });
  }

  fillChart(){
    
    this.LineChart = new Chart('lineChart',{
      type: 'bar',
      data: {
        //labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        labels: this.arrLabels,
        datasets: [{
          label: 'Total de votos: ' + this.total,
          //data: [9,7,3,5,2,10,15,16,19,3,1,9],
          data: this.arrValues,
          fill: false,
          lineTension: 0.2,
          backgroundColor: ["red","blue","yellow","green","purple","orange","white","black","brown","gray","red","red"],
          borderColor: "black",
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text: "Votos por partido",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
