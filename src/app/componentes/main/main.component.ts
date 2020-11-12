import { Component, OnInit } from '@angular/core';
import { FormularService } from 'src/app/servicios/formular.service';
import { materiaPrima } from 'src/app/servicios/materiaPrima.model';
import { materiaPrimaDB } from 'src/app/servicios/materiaPrima.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  materiasPrimas: materiaPrima[]=[]
  seleccionMP: materiaPrima[] = [];
  resultadoMasa: number = 0;
  resultadohumedad: number = 0;
  resultadoProteina: number = 0;
  resultadoGrasa: number = 0;
  id: any = {};
  contadorMPSeleccion: number = 0;
  constructor(private mpServices: materiaPrimaDB,private formularService:FormularService) {
  this.materiasPrimas=mpServices.materiaPrima
  this.seleccionMP=this.formularService.seleccionMP

  }
  ngOnInit(): void {
  }

  onClick(event: materiaPrima) {
    if (
      this.contadorMPSeleccion === this.materiasPrimas.length ||
      this.seleccionMP.some((e) => {
        return e.id === event.id;
      })
    ) {
      return;
    }
    this.seleccionMP.push(event);
    this.contadorMPSeleccion++;
  }

  onListo() {
    this.resultadoMasa = 0;
    this.resultadohumedad = 0;
    this.resultadoProteina = 0;
    this.resultadoGrasa = 0;

    this.seleccionMP.forEach((e) => {
      if (!this.id[e.id]) {
        this.id[e.id] = 0;
        e.masa = 0;
      } else {
        e.masa = this.id[e.id];
      }
    });
    if (
      this.seleccionMP.some((e) => {
        return e.masa < 0;
      })
    ) {
      alert('ERROR: No se permiten valores masicos negativos');
      let error = document.getElementById(this.seleccionMP.find((e)=>{
          return e.masa<0
      }).Nombre);
      error.focus();
      return;
    }
    this.seleccionMP.forEach((e) => {
      this.resultadoMasa += e.masa;
    });
    this.seleccionMP.forEach((e) => {
      this.resultadohumedad += e.masa * e.Humedad;
      this.resultadoProteina += e.masa * e.Proteina;
      this.resultadoGrasa += e.masa * e.Grasa;
    });
    this.resultadohumedad /= this.resultadoMasa;
    this.resultadoProteina /= this.resultadoMasa;
    this.resultadoGrasa /= this.resultadoMasa;
  }
  onRestore() {
    this.id = {};
  }
  onReset() {
    this.seleccionMP.splice(0);
    this.contadorMPSeleccion = 0;
    this.id = {};
  }
  deleteSeleccion(event: materiaPrima) {
    let valor: number = this.seleccionMP.indexOf(event);
    this.seleccionMP.splice(valor, 1);
    this.contadorMPSeleccion--;
  }


}
