import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, LineController, registerables } from 'chart.js';
import { Animo } from 'src/app/shared/models/animo';
import { EmocionService } from 'src/app/shared/services/emocion.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: Animo[] = [];
  displayedColumns: string[] = ['position', 'fecha', 'name', 'result', 'total', 'opciones'];
  myChart: any;

  constructor(
    private emocionService: EmocionService
  ) {
    Chart.register(LinearScale, LineController, ...registerables);
   }

  ngOnInit(): void {
    this.startAnimo();
    this.emocionService.obtenerAnimos().then((res:any) => {
      if (res.success){
        this.dataSource = res.result.lista;
      }
    });
  }

  startAnimo() {
    let ctx: any = document.getElementById('animo') as HTMLElement;
    var data = {
      labels: [0, 25, 45, 55, 75, 100],
      datasets: [
        {
          label: 'Mal animo',
          data: [0, 1, 0.485, 0],
          backgroundColor: 'red',
          borderColor: 'rgba(255, 0, 0, 0.5)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Buen animo',
          data: [ , , 0, 0.485, 1, 0],
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 5,
        }
      ],
    };

    //options
    var options = {
      responsive: true,
      title: {
        display: true,
        position: 'top',
        text: 'Line Graph',
        fontSize: 18,
        fontColor: '#111',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16,
        },
      },
    };

    //create Chart class object
    this.myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }

  eliminarAnimo(row:any){
    this.emocionService.eliminarAnimo(row.animoId).then((res:any)=>{
      if (res.success){
        Swal.fire(
          'Exito',
          res.message,
          'success'
        ).then(()=>{
          window.location.reload();
        });
      }
    });
  }

}
