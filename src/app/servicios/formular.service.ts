import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { materiaPrima } from './materiaPrima.model';

@Injectable({
  providedIn: 'root'
})
export class FormularService {
  titulo:string="";
  navegacion:boolean=null;
  seleccionMP:materiaPrima[]=[]
  constructor() { }
}
