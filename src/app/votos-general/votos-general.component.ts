import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-votos-general',
  templateUrl: './votos-general.component.html',
  styleUrls: ['./votos-general.component.css']
})
export class VotosGeneralComponent implements OnInit {

  LineChart = []

  constructor() { }

  ngOnInit() {

    this.LineChart = new Chart('lineChart',{
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [{
          label: 'Number of items sold in months',
          data: [9,7,3,5,2,10,15,16,19,3,1,9],
          fill: false,
          lineTension: 0.2,
          backgroundColor: ["red","blue","yellow","green","purple","orange","white","black","brown","gray","red","red"],
          borderWidth: 1
        }]
      },
      options: {
        title:{
          text: "Line Chart",
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
