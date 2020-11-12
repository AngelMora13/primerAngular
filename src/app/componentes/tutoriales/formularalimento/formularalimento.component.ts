import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularalimento',
  templateUrl: './formularalimento.component.html',
  styleUrls: ['./formularalimento.component.css']
})
export class FormularalimentoComponent implements OnInit {
  pagina:number=1;
  //Constructor---------------------
  constructor() { }
  //funciones-----------------------
  onSiguiente(){
    if(this.pagina===5){
      return
    }else{
    this.pagina++;
    }
  }
  onAnterior(){
    if (this.pagina===1){
      return
    }else{
    this.pagina--;
    }
  }
  ngOnInit(): void {
  }

}
