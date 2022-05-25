import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, LineController, registerables } from 'chart.js';
import { Emocion } from 'src/app/shared/models/emocion';
import { Regla } from 'src/app/shared/models/regla';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-emotion',
  templateUrl: './add-emotion.component.html',
  styleUrls: ['./add-emotion.component.scss']
})
export class AddEmotionComponent implements OnInit {

  valorFeliz: number = 0;
  valorMolesto: number = 0;
  valorNormal: number = 0;
  nombre: string = "";
  listaEmocionesFeliz: Emocion[] = [];
  listaEmocionesMolesto: Emocion[] = [];
  listaEmocionesTranquilo: Emocion[] = [];
  listaAnimo: Emocion[] = [];
  listaReglas: Regla[] = [];

  myChart: any;
  constructor() {
    Chart.register(LinearScale, LineController, ...registerables);
  }

  ngOnInit(): void {
    this.startFirstGraphic();
  }

  startFirstGraphic(){
    if (this.myChart != undefined) {
      this.myChart.destroy();
    }
    this.myChart = new Chart("emociones", {
      type: 'line',
      data: {
        labels: [0, 20, 35],
        datasets: [{
          label: "Emocion",
          data: [0, 1, 0],
          borderWidth: 1,
          borderColor: 'rgb(37, 37, 38)',
          backgroundColor: 'rgb(37, 37, 38)',
          pointBackgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"]
        }]
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: "Emociones",
              font: {
                size: 16,
                weight: "bold"
              }
            },
            beginAtZero: true
          },
          x: {
            title: {
              display: true,
              text: "Animo",
              font: {
                size: 16,
                weight: "bold"
              }
            },
          }
        },
        
        responsive: true,
      }
    });
  }

  llenarReglas(){
    this.listaReglas = [
      {
        combinacion: "PocoPocoPoco",
        salida: 'mal'
      },
      {
        combinacion: "PocoPocoMedio",
        salida: 'mal'
      },
      {
        combinacion: "PocoPocoMucha",
        salida: 'Buen'
      },
      {
        combinacion: "PocoMedioPoco",
        salida: 'mal'
      },
      {
        combinacion: "PocoMedioMedio",
        salida: 'mal'
      },
      {
        combinacion: "PocoMuchaPoco",
        salida: 'mal'
      },
      {
        combinacion: "MedioPocoPoco",
        salida: 'Buen'
      },
      {
        combinacion: "MedioPocoMedio",
        salida: 'Buen'
      },
      {
        combinacion: "MedioPocoMucha",
        salida: 'Buen'
      },
      {
        combinacion: "MedioMedioPoco",
        salida: 'mal'
      },
      {
        combinacion: "MedioMedioMedio",
        salida: 'mal'
      },
      {
        combinacion: "MedioMuchaPoco",
        salida: 'mal'
      },
      {
        combinacion: "MuchaPocoPoco",
        salida: 'Buen'
      },
      {
        combinacion: "MuchaPocoMedio",
        salida: 'Buen'
      },
      {
        combinacion: "MuchaPocoMucha",
        salida: 'Buen'
      },
      {
        combinacion: "MuchaMedioPoco",
        salida: 'Buen'
      },
    ]
  }

  cortes(){
    var reglaCadena: string;
    for (var i = 0; i < this.listaEmocionesFeliz.length; i++){
      for (var j = 0; j < this.listaEmocionesMolesto.length; j++){
        for (var k = 0; k < this.listaEmocionesTranquilo.length; k++){
          reglaCadena = this.listaEmocionesFeliz[i].intervalo + 
                        this.listaEmocionesMolesto[j].intervalo + 
                        this.listaEmocionesTranquilo[k].intervalo;
          var dato = this.listaReglas.find( x => {
            x.combinacion = reglaCadena;
          });
              /*var emocion: Emocion = {
                nombre: "Animo",
                intervalo: dato.salida,
                valor: Math.min(this.listaEmocionesFeliz[i].valor, this.listaEmocionesMolesto[j].valor, this.listaEmocionesTranquilo[k].valor)
              }
              this.listaAnimo.push(emocion);   */
              console.log(dato);           
          reglaCadena = "";
        }
      }
    }
    console.log(this.listaAnimo);
  }

  feliz(){
    var valor: number;
    if (this.valorFeliz > 20 && this.valorFeliz < 35){
      valor = (35 - this.valorFeliz) / 15;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Poco",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    } if (this.valorFeliz <= 50 && this.valorFeliz > 25){
      valor = (this.valorFeliz - 25) / 25;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Medio",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    } if (this.valorFeliz <= 75 && this.valorFeliz > 50){
      valor = (75 - this.valorFeliz) / 25;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Medio",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    }
    if (this.valorFeliz <= 80 && this.valorFeliz > 65){
      valor = (this.valorFeliz - 65) / 15;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Mucha",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    }
    if (this.valorFeliz < 100 && this.valorFeliz > 80){
      valor = (100 - this.valorFeliz) / 15;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Mucha",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    }
    console.log(this.listaEmocionesFeliz);
  }

  molesto(){
    var valor: number;
    if (this.valorMolesto > 20 && this.valorMolesto < 35){
      valor = (35 - this.valorMolesto) / 15;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo:"Poco",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    } if (this.valorMolesto <= 50 && this.valorMolesto > 25){
      valor = (this.valorMolesto - 25) / 25;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo:"Medio",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    } if (this.valorMolesto <= 75 && this.valorMolesto > 50){
      valor = (75 - this.valorMolesto) / 25;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo:"Medio",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    }
    if (this.valorMolesto <= 80 && this.valorMolesto > 65){
      valor = (this.valorMolesto - 65) / 15;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo:"Mucha",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    }
    if (this.valorMolesto < 100 && this.valorMolesto > 80){
      valor = (100 - this.valorMolesto) / 15;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo:"Mucha",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    }
    console.log(this.listaEmocionesMolesto);
  }

  tranquilo(){
    var valor: number;
    if (this.valorNormal > 20 && this.valorNormal < 35){
      valor = (35 - this.valorNormal) / 15;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Poco",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    } if (this.valorNormal <= 50 && this.valorNormal > 25){
      valor = (this.valorNormal - 25) / 25;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Medio",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    } if (this.valorNormal <= 75 && this.valorNormal > 50){
      valor = (75 - this.valorNormal) / 25;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Medio",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    }
    if (this.valorNormal <= 80 && this.valorNormal > 65){
      valor = (this.valorNormal - 65) / 15;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Mucha",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    }
    if (this.valorNormal < 100 && this.valorNormal > 80){
      valor = (100 - this.valorNormal) / 15;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo:"Mucha",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    }
    console.log(this.listaEmocionesTranquilo);
  }

  esPocoFeliz: boolean = false;
  esMedioFeliz: boolean = false;
  esMuyFeliz: boolean = false;

  esPocoMolesto: boolean = false;
  esMedioMolesto: boolean = false;
  esMuyMolesto: boolean = false;

  esPocoTranquilo: boolean = false;
  esMedioTranquilo: boolean = false;
  esMuyTranquilo: boolean = false;

  changeStatusHappy(value: number) {

    if (value == 33) {
      this.valorFeliz = value;
      this.esMuyFeliz = false;
      this.esMedioFeliz = false;
      if (this.esPocoFeliz) {
        this.esPocoFeliz = false;
      } else {
        this.esPocoFeliz = true;
      }
    }

    else if (value == 67) {
      this.valorFeliz = value;
      this.esMuyFeliz = false;
      this.esPocoFeliz = false;
      if (this.esMedioFeliz) {
        this.esMedioFeliz = false;
      } else {
        this.esMedioFeliz = true;
      }
    }

    else if (value == 100) {
      this.valorFeliz = value;
      this.esPocoFeliz = false;
      this.esMedioFeliz = false;
      if (this.esMuyFeliz) {
        this.esMuyFeliz = false;
      } else {
        this.esMuyFeliz = true;
      }
    }
  }

  changeStatusAngry(value: number) {

    if (value == 33) {
      this.valorMolesto = value;
      this.esMuyMolesto = false;
      this.esMedioMolesto = false;
      if (this.esPocoMolesto) {
        this.esPocoMolesto = false;
      } else {
        this.esPocoMolesto = true;
      }
    }

    else if (value == 67) {
      this.valorMolesto = value;
      this.esMuyMolesto = false;
      this.esPocoMolesto = false;
      if (this.esMedioMolesto) {
        this.esMedioMolesto = false;
      } else {
        this.esMedioMolesto = true;
      }
    }

    else if (value == 100) {
      this.valorMolesto = value;
      this.esPocoMolesto = false;
      this.esMedioMolesto = false;
      if (this.esMuyMolesto) {
        this.esMuyMolesto = false;
      } else {
        this.esMuyMolesto = true;
      }
    }

  }

  changeStatusNormal(value: number) {

    if (value == 33) {
      this.valorNormal = value;
      this.esMuyTranquilo = false;
      this.esMedioTranquilo = false;
      if (this.esPocoTranquilo) {
        this.esPocoTranquilo = false;
      } else {
        this.esPocoTranquilo = true;
      }
    }

    else if (value == 67) {
      this.valorNormal = value;
      this.esMuyTranquilo = false;
      this.esPocoTranquilo = false;
      if (this.esMedioTranquilo) {
        this.esMedioTranquilo = false;
      } else {
        this.esMedioTranquilo = true;
      }
    }

    else if (value == 100) {
      this.valorNormal = value;
      this.esPocoTranquilo = false;
      this.esMedioTranquilo = false;
      if (this.esMuyTranquilo) {
        this.esMuyTranquilo = false;
      } else {
        this.esMuyTranquilo = true;
      }
    }
  }

  enviarEmocion(){
    this.llenarReglas();
    this.listaEmocionesFeliz = [];
    this.listaEmocionesMolesto = [];
    this.listaEmocionesTranquilo = [];
    if (this.nombre == ""){
      this.nombre = "Anónimo";
    }
    //seccion poco feliz
    if (this.esPocoFeliz && this.esPocoMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    } else if (this.esPocoFeliz && this.esPocoMolesto && this.esMedioTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esPocoFeliz && this.esPocoMolesto && this.esMuyTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esPocoFeliz && this.esMedioMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    } else if (this.esPocoFeliz && this.esMedioMolesto && this.esMedioTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esPocoFeliz && this.esMuyMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    }
    ////////
    //seccion medio feliz
    else if (this.esMedioFeliz && this.esPocoMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    } else if (this.esMedioFeliz && this.esPocoMolesto && this.esMedioTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esMedioFeliz && this.esPocoMolesto && this.esMuyTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esMedioFeliz && this.esMedioMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    } else if (this.esMedioFeliz && this.esMedioMolesto && this.esMedioTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esMedioFeliz && this.esMuyMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    }
    ////////

    //seccion muy feliz
    else if (this.esMuyFeliz && this.esPocoMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    } else if (this.esMuyFeliz && this.esPocoMolesto && this.esMedioTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esMuyFeliz && this.esPocoMolesto && this.esMuyTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
    } else if (this.esMuyFeliz && this.esMedioMolesto && this.esPocoTranquilo){
      Swal.fire(
        'Exito',
        'Esta combinacion es permitida',
        'success'
      ).then(() => {
        this.feliz();
        this.molesto();
        this.tranquilo();
        this.cortes();
      });
      
    } 
    ////////
    else {
      Swal.fire(
        'Error',
        'Esta combinacion no es permitida',
        'error'
      );
    }
  }

}
