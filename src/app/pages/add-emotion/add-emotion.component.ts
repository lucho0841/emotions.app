import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, LineController, registerables } from 'chart.js';
import { Animo } from 'src/app/shared/models/animo';
import { Emocion } from 'src/app/shared/models/emocion';
import { Regla } from 'src/app/shared/models/regla';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { EmocionService } from 'src/app/shared/services/emocion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emotion',
  templateUrl: './add-emotion.component.html',
  styleUrls: ['./add-emotion.component.scss']
})
export class AddEmotionComponent implements OnInit {

  autoTicks = false;
  tickInterval = 1;
  showTicks = false;
  isData: boolean = false;

  valorFeliz: number = 0;
  valorMolesto: number = 0;
  valorNormal: number = 0;
  nombre: string = "";
  listaEmocionesFeliz: Emocion[] = [];
  listaEmocionesMolesto: Emocion[] = [];
  listaEmocionesTranquilo: Emocion[] = [];
  listaAnimo: Emocion[] = [];
  listaReglas: Regla[] = [];
  myDate = new Date();

  myChart: any;
  constructor(
    private datePipe: DatePipe,
    private route: Router,
    private emocionService: EmocionService
  ) {
    Chart.register(LinearScale, LineController, ...registerables);
  }

  ngOnInit(): void {

    this.startAlegre();
    this.startMolesto();
    this.startTranquilo();
    //this.myChart.destroy();
  }

  startAlegre() {
    let ctx: any = document.getElementById('alegre') as HTMLElement;
    var data = {
      labels: [0, 14, 25, 35, 49, 65, 75, 83, 100],
      datasets: [
        {
          label: 'Poco',
          data: [0, 1, 0.485, 0],
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Medio',
          data: [, , 0, 0.485, 1, 0.485, 0],
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Mucho',
          data: [, , , , , 0, 0.485, 1, 0],
          backgroundColor: 'orange',
          borderColor: 'rgba(255, 200, 97, 0.5)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
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
  startMolesto() {
    let ctx: any = document.getElementById('molesto') as HTMLElement;
    var data = {
      labels: [0, 16, 25, 35, 42, 65, 75, 81, 100],
      datasets: [
        {
          label: 'Poco',
          data: [0, 1, 0.485, 0],
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Medio',
          data: [, , 0, 0.485, 1, 0.485, 0],
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Mucho',
          data: [, , , , , 0, 0.485, 1, 0],
          backgroundColor: 'orange',
          borderColor: 'rgba(255, 200, 97, 0.5)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
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
  startTranquilo() {
    let ctx: any = document.getElementById('normal') as HTMLElement;
    var data = {
      labels: [0, 15, 25, 35, 43, 65, 74, 75, 100],
      datasets: [
        {
          label: 'Poco',
          data: [0, 1, 0.485, 0],
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Medio',
          data: [, , 0, 0.485, 1, 0.65, 0.32, 0],
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'Mucho',
          data: [, , , , , 0, 1, 0.485, 0],
          backgroundColor: 'orange',
          borderColor: 'rgba(255, 200, 97, 0.5)',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
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

  validarReglas(cadena: string) {
    var salida = "";
    if (cadena === "PocoPocoPoco") {
      salida = "Mal";
    } else if (cadena === "PocoPocoMedio") {
      salida = "Mal";
    }
    else if (cadena === "PocoPocoMucha") {
      salida = "Buen";
    }
    else if (cadena === "PocoMedioPoco") {
      salida = "Mal";
    }
    else if (cadena === "PocoMedioMedio") {
      salida = "Mal";
    }
    else if (cadena === "PocoMuchaPoco") {
      salida = "Mal";
    }
    else if (cadena === "MedioPocoPoco") {
      salida = "Buen";
    }
    else if (cadena === "MedioPocoMedio") {
      salida = "Buen";
    }
    else if (cadena === "MedioPocoMucha") {
      salida = "Buen";
    }
    else if (cadena === "MedioPocoPoco") {
      salida = "Mal";
    }
    else if (cadena === "MedioMedioPoco") {
      salida = "Mal";
    }
    else if (cadena === "MedioMedioMedio") {
      salida = "Mal";
    }
    else if (cadena === "MedioMuchaPoco") {
      salida = "Mal";
    }
    else if (cadena === "MuchaPocoPoco") {
      salida = "Buen";
    }
    else if (cadena === "MuchaPocoMedio") {
      salida = "Buen";
    }
    else if (cadena === "MuchaPocoMucha") {
      salida = "Buen";
    }
    else if (cadena === "MuchaMedioPoco") {
      salida = "Buen";
    }
    return salida;
  }

  cortes() {
    var reglaCadena: string;
    for (var i = 0; i < this.listaEmocionesFeliz.length; i++) {
      for (var j = 0; j < this.listaEmocionesMolesto.length; j++) {
        for (var k = 0; k < this.listaEmocionesTranquilo.length; k++) {
          reglaCadena = this.listaEmocionesFeliz[i].intervalo +
            this.listaEmocionesMolesto[j].intervalo +
            this.listaEmocionesTranquilo[k].intervalo;
          const animo: Emocion = {
            nombre: "Animo",
            intervalo: this.validarReglas(reglaCadena),
            valor: Math.min(this.listaEmocionesFeliz[i].valor, this.listaEmocionesMolesto[j].valor, this.listaEmocionesTranquilo[k].valor)
          }
          this.listaAnimo.push(animo);
        }
      }
    }
    this.calcularAnimo();
  }

  feliz() {
    var valor: number;
    if (this.valorFeliz <= 14) {
      valor = (this.valorFeliz) / 14;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo: "Poco",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    }
    if (this.valorFeliz > 14 && this.valorFeliz <= 35) {
      valor = (35 - this.valorFeliz) / 21;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo: "Poco",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    } if (this.valorFeliz <= 49 && this.valorFeliz > 25) {
      valor = (this.valorFeliz - 25) / 24;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo: "Medio",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    } if (this.valorFeliz <= 75 && this.valorFeliz > 49) {
      valor = (75 - this.valorFeliz) / 26;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo: "Medio",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    }
    if (this.valorFeliz <= 83 && this.valorFeliz > 65) {
      valor = (this.valorFeliz - 65) / 18;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo: "Mucha",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    }
    if (this.valorFeliz < 100 && this.valorFeliz > 83) {
      valor = (100 - this.valorFeliz) / 17;
      const _total: Emocion = {
        nombre: "Feliz",
        intervalo: "Mucha",
        valor: valor
      };
      this.listaEmocionesFeliz.push(_total);
    }
  }

  molesto() {
    var valor: number;
    if (this.valorMolesto <= 16) {
      valor = (this.valorMolesto) / 16;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo: "Poco",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    }
    if (this.valorMolesto > 16 && this.valorMolesto <= 35) {
      valor = (35 - this.valorMolesto) / 19;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo: "Poco",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    } if (this.valorMolesto <= 42 && this.valorMolesto > 25) {
      valor = (this.valorMolesto - 25) / 17;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo: "Medio",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    } if (this.valorMolesto <= 75 && this.valorMolesto > 42) {
      valor = (75 - this.valorMolesto) / 33;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo: "Medio",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    }
    if (this.valorMolesto <= 81 && this.valorMolesto > 65) {
      valor = (this.valorMolesto - 65) / 16;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo: "Mucha",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    }
    if (this.valorMolesto < 100 && this.valorMolesto > 81) {
      valor = (100 - this.valorMolesto) / 19;
      const _total: Emocion = {
        nombre: "Molesto",
        intervalo: "Mucha",
        valor: valor
      };
      this.listaEmocionesMolesto.push(_total);
    }
  }

  tranquilo() {
    var valor: number;
    if (this.valorNormal <= 15) {
      valor = (this.valorNormal) / 15;
      const _total: Emocion = {
        nombre: "Tranquilo",
        intervalo: "Poco",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    }
    if (this.valorNormal > 15 && this.valorNormal <= 35) {
      valor = (35 - this.valorNormal) / 20;
      const _total: Emocion = {
        nombre: "Tranquilo",
        intervalo: "Poco",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    } if (this.valorNormal <= 43 && this.valorNormal > 25) {
      valor = (this.valorNormal - 25) / 18;
      const _total: Emocion = {
        nombre: "Tranquilo",
        intervalo: "Medio",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    } if (this.valorNormal <= 75 && this.valorNormal > 43) {
      valor = (75 - this.valorNormal) / 32;
      const _total: Emocion = {
        nombre: "Tranquilo",
        intervalo: "Medio",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    }
    if (this.valorNormal <= 74 && this.valorNormal > 65) {
      valor = (this.valorNormal - 65) / 9;
      const _total: Emocion = {
        nombre: "Tranquilo",
        intervalo: "Mucha",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    }
    if (this.valorNormal < 100 && this.valorNormal > 74) {
      valor = (100 - this.valorNormal) / 26;
      const _total: Emocion = {
        nombre: "Tranquilo",
        intervalo: "Mucha",
        valor: valor
      };
      this.listaEmocionesTranquilo.push(_total);
    }
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

  validarEmociones() {
    //// Feliz ////
    if (this.valorFeliz <= 25) {
      this.esPocoFeliz = true;
    } else if (this.valorFeliz > 25 && this.valorFeliz < 35) {
      var valor1 = (35 - this.valorFeliz) / 21;
      var valor2 = (this.valorFeliz - 25) / 24;
      if (valor1 > valor2) {
        this.esPocoFeliz = true;
      } else {
        this.esMedioFeliz = true;
      }
    } else if (this.valorFeliz <= 65 && this.valorFeliz >= 35) {
      this.esMedioFeliz = true;
    } else if (this.valorFeliz < 75 && this.valorFeliz > 65) {
      var valor1 = (75 - this.valorFeliz) / 26;
      var valor2 = (this.valorFeliz - 65) / 18;
      if (valor1 > valor2) {
        this.esMedioFeliz = true;
      } else {
        this.esMuyFeliz = true;
      }
    }
    else if (this.valorFeliz >= 75) {
      this.esMuyFeliz = true;
    }

    //// Molesto ////
    if (this.valorMolesto <= 25) {
      this.esPocoMolesto = true;
    } else if (this.valorMolesto > 25 && this.valorMolesto < 35) {
      var valor1 = (35 - this.valorMolesto) / 19;
      var valor2 = (this.valorMolesto - 25) / 17;
      if (valor1 > valor2) {
        this.esPocoMolesto = true;
      } else {
        this.esMedioMolesto = true;
      }
    } else if (this.valorMolesto <= 65 && this.valorMolesto >= 35) {
      this.esMedioMolesto = true;
    } else if (this.valorMolesto < 75 && this.valorMolesto > 65) {
      var valor1 = (75 - this.valorMolesto) / 33;
      var valor2 = (this.valorMolesto - 65) / 16;
      if (valor1 > valor2) {
        this.esMedioMolesto = true;
      } else {
        this.esMuyMolesto = true;
      }
    }
    else if (this.valorMolesto >= 75) {
      this.esMuyMolesto = true;
    }

    //// Tranquilo ////
    if (this.valorNormal <= 25) {
      this.esPocoTranquilo = true;
    } else if (this.valorNormal > 25 && this.valorNormal < 35) {
      var valor1 = (35 - this.valorNormal) / 20;
      var valor2 = (this.valorNormal - 25) / 18;
      if (valor1 > valor2) {
        this.esPocoTranquilo = true;
      } else {
        this.esMedioTranquilo = true;
      }
    } else if (this.valorNormal <= 65 && this.valorNormal >= 35) {
      this.esMedioTranquilo = true;
    } else if (this.valorNormal < 74 && this.valorNormal > 65) {
      var valor1 = (75 - this.valorNormal) / 32;
      var valor2 = (this.valorNormal - 65) / 9;
      if (valor1 > valor2) {
        this.esMedioTranquilo = true;
      } else {
        this.esMuyTranquilo = true;
      }
    }
    else if (this.valorNormal >= 74) {
      this.esMuyTranquilo = true;
    }
  }

  enviarEmocion() {
    this.validarEmociones();
    this.listaEmocionesFeliz = [];
    this.listaEmocionesMolesto = [];
    this.listaEmocionesTranquilo = [];
    if (this.nombre == "") {
      this.nombre = "Anónimo";
    }
    //seccion poco feliz
    if (this.esPocoFeliz && this.esPocoMolesto && this.esPocoTranquilo) {
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

    } else if (this.esPocoFeliz && this.esPocoMolesto && this.esMedioTranquilo) {
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
    } else if (this.esPocoFeliz && this.esPocoMolesto && this.esMuyTranquilo) {
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
    } else if (this.esPocoFeliz && this.esMedioMolesto && this.esPocoTranquilo) {
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

    } else if (this.esPocoFeliz && this.esMedioMolesto && this.esMedioTranquilo) {
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
    } else if (this.esPocoFeliz && this.esMuyMolesto && this.esPocoTranquilo) {
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
    else if (this.esMedioFeliz && this.esPocoMolesto && this.esPocoTranquilo) {
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

    } else if (this.esMedioFeliz && this.esPocoMolesto && this.esMedioTranquilo) {
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
    } else if (this.esMedioFeliz && this.esPocoMolesto && this.esMuyTranquilo) {
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
    } else if (this.esMedioFeliz && this.esMedioMolesto && this.esPocoTranquilo) {
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

    } else if (this.esMedioFeliz && this.esMedioMolesto && this.esMedioTranquilo) {
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
    } else if (this.esMedioFeliz && this.esMuyMolesto && this.esPocoTranquilo) {
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
    else if (this.esMuyFeliz && this.esPocoMolesto && this.esPocoTranquilo) {
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

    } else if (this.esMuyFeliz && this.esPocoMolesto && this.esMedioTranquilo) {
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
    } else if (this.esMuyFeliz && this.esPocoMolesto && this.esMuyTranquilo) {
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
    } else if (this.esMuyFeliz && this.esMedioMolesto && this.esPocoTranquilo) {
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
    this.resetear();
  }

  resetear() {
    this.esPocoFeliz = false;
    this.esPocoMolesto = false;
    this.esPocoTranquilo = false;
    this.esMedioFeliz = false;
    this.esMedioMolesto = false;
    this.esMedioTranquilo = false;
    this.esMuyFeliz = false;
    this.esMuyMolesto = false;
    this.esMuyTranquilo = false;
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    if (this.valorFeliz != 0 && this.valorMolesto != 0 && this.valorNormal != 0) {
      this.isData = true;
    } else {
      this.isData = false;
    }
    return 0;
  }

  calcularAnimo() {
    this.emocionService.obtenerAnimos().then((res: any) => {
      if (res.success) {
        var sumatoria = 0;
        var divisor = 0;
        this.listaAnimo.forEach(element => {
          if (element.intervalo === "Mal") {
            sumatoria += ((element.valor * 25) * element.valor) + ((-(element.valor * 30) + 55) * element.valor);
          } else {
            sumatoria += (((element.valor * 30) + 45) * element.valor) + ((-(element.valor * 25) + 100) * element.valor);
          }
          divisor += (element.valor + element.valor);
        });
        var resultado = sumatoria / divisor;
        if (resultado <= 45) {
          const animo: Animo = {
            AnimoId: res.result.tamano + 1,
            Nombre: this.nombre,
            EstadoAnimo: "Mal animo",
            Resultado: resultado,
            FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
          }
          this.emocionService.crearAnimo(animo).then((res: any) => {
            if (res.success) {
              Swal.fire(
                'Exito',
                res.message,
                'success'
              ).then(() => {
                this.route.navigateByUrl('/home');
              });
            }
          });
        } else if (resultado > 45 && resultado < 55) {
          var valor1 = (55 - resultado) / 30;
          var valor2 = (resultado - 45) / 30;
          if (valor1 > valor2) {
            const animo: Animo = {
              AnimoId: res.result.tamano + 1,
              Nombre: this.nombre,
              EstadoAnimo: "Mal animo",
              Resultado: resultado,
              FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
            }
            this.emocionService.crearAnimo(animo).then((res: any) => {
              if (res.success) {
                Swal.fire(
                  'Exito',
                  res.message,
                  'success'
                ).then(() => {
                  this.route.navigateByUrl('/home');
                });
              }
            });
          } else {
            const animo: Animo = {
              AnimoId: res.result.tamano + 1,
              Nombre: this.nombre,
              EstadoAnimo: "Buen animo",
              Resultado: resultado,
              FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
            }
            this.emocionService.crearAnimo(animo).then((res: any) => {
              if (res.success) {
                Swal.fire(
                  'Exito',
                  res.message,
                  'success'
                ).then(() => {
                  this.route.navigateByUrl('/home');
                });
              }
            });
          }
        } else {
          const animo: Animo = {
            AnimoId: res.result.tamano + 1,
            Nombre: this.nombre,
            EstadoAnimo: "Buen animo",
            Resultado: resultado,
            FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
          }
          this.emocionService.crearAnimo(animo).then((res: any) => {
            if (res.success) {
              Swal.fire(
                'Exito',
                res.message,
                'success'
              ).then(() => {
                this.route.navigateByUrl('/home');
              });
            }
          });
        }
        this.listaAnimo = [];
      } else {
        var sumatoria = 0;
        var divisor = 0;
        this.listaAnimo.forEach(element => {
          if (element.intervalo === "Mal") {
            sumatoria += ((element.valor * 25) * element.valor) + ((-(element.valor * 30) + 55) * element.valor);
          } else {
            sumatoria += (((element.valor * 30) + 45) * element.valor) + ((-(element.valor * 25) + 100) * element.valor);
          }
          divisor += (element.valor + element.valor);
        });
        var resultado = sumatoria / divisor;
        if (resultado <= 45) {
          const animo: Animo = {
            AnimoId: 1,
            Nombre: this.nombre,
            EstadoAnimo: "Mal animo",
            Resultado: resultado,
            FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
          }
          this.emocionService.crearAnimo(animo).then((res: any) => {
            if (res.success) {
              Swal.fire(
                'Exito',
                res.message,
                'success'
              ).then(() => {
                this.route.navigateByUrl('/home');
              });
            }
          });
        } else if (resultado > 45 && resultado < 55) {
          var valor1 = (55 - resultado) / 30;
          var valor2 = (resultado - 45) / 30;
          if (valor1 > valor2) {
            const animo: Animo = {
              AnimoId: 1,
              Nombre: this.nombre,
              EstadoAnimo: "Mal animo",
              Resultado: resultado,
              FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
            }
            this.emocionService.crearAnimo(animo).then((res: any) => {
              if (res.success) {
                Swal.fire(
                  'Exito',
                  res.message,
                  'success'
                ).then(() => {
                  this.route.navigateByUrl('/home');
                });
              }
            });
          } else {
            const animo: Animo = {
              AnimoId: 1,
              Nombre: this.nombre,
              EstadoAnimo: "Buen animo",
              Resultado: resultado,
              FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
            }
            this.emocionService.crearAnimo(animo).then((res: any) => {
              if (res.success) {
                Swal.fire(
                  'Exito',
                  res.message,
                  'success'
                ).then(() => {
                  this.route.navigateByUrl('/home');
                });
              }
            });
          }
        } else {
          const animo: Animo = {
            AnimoId: 1,
            Nombre: this.nombre,
            EstadoAnimo: "Buen animo",
            Resultado: resultado,
            FechaCreacion: this.datePipe.transform(this.myDate, 'yyyy-MM-dd')!
          }
          this.emocionService.crearAnimo(animo).then((res: any) => {
            if (res.success) {
              Swal.fire(
                'Exito',
                res.message,
                'success'
              ).then(() => {
                this.route.navigateByUrl('/home');
              });
            }
          });
        }
        this.listaAnimo = [];
      }
    });
  }
}
