import { Component, OnInit } from '@angular/core';
import { FormularService } from 'src/app/servicios/formular.service';
import { materiaPrima } from 'src/app/servicios/materiaPrima.model';

@Component({
  selector: 'app-alimento',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.css']
})
export class AlimentoComponent implements OnInit {
  titulo:string=""
  seleccionMP:materiaPrima[]=[]
  id: any = {};
  resultadoMasa: number = 0;
  resultadohumedad: number = 0;
  resultadoProteina: number = 0;
  resultadoGrasa: number = 0;

  //constructor----------------------
  constructor(private formularService:FormularService ) {
    this.seleccionMP=this.formularService.seleccionMP
    this.titulo=this.formularService.titulo
   }

  //funciones-------------------------
  
  onListo() {
    console.log(this.id)
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

  ngOnInit(): void {
  }

}
