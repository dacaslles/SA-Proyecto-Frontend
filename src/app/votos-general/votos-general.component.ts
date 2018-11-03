import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';

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

    this.http.get('https://endpoints-dot-sa-central-server.appspot.com/_ah/api/voto/v1/contabilizar/').toPromise()
    .then(
      (data:any) => {
        this.result = data.objetoRespuesta.votos;
        console.warn(data);
        
        let i = 0;
        this.arrLabels = new Array();
        this.arrValues = new Array();
        
        this.result.forEach(element => {
          this.arrLabels.push(element.nombrePartido);
          this.arrValues.push(element.votos);
        });
        
        //this.arrLabels.pop();
        //this.total = this.arrValues.pop();
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
          label: '',
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
