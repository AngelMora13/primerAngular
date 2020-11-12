import { Component, OnInit } from '@angular/core';
import { FormularService } from 'src/app/servicios/formular.service';
import { materiaPrima } from 'src/app/servicios/materiaPrima.model';
import { materiaPrimaDB } from 'src/app/servicios/materiaPrima.service';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {
  materiasPrimas: materiaPrima[]=[]
  seleccionMP: materiaPrima[] = [];
  contadorMPSeleccion: number = 0;
  titulo:string=this.formularService.titulo

  //constrcutor -----------------------------------------------
  constructor(private mpServices: materiaPrimaDB, private formularService:FormularService) {
    this.seleccionMP=this.formularService.seleccionMP
    }

  //funciones-----------------------------------------------
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

    deleteSeleccion(event: materiaPrima) {
      let valor: number = this.seleccionMP.indexOf(event);
      this.seleccionMP.splice(valor, 1);
      this.contadorMPSeleccion--;
    }

    onSiguiente(){
    this.formularService.seleccionMP=this.seleccionMP
    }
    onReset(){
      this.formularService.seleccionMP=[]
      this.contadorMPSeleccion=0;
    }

  ngOnInit(): void {
    this.materiasPrimas=this.mpServices.materiaPrima;
  }

}
