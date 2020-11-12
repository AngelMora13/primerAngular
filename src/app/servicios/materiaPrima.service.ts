import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { materiaPrima } from './materiaPrima.model';

@Injectable()
export class materiaPrimaDB{
    materiaPrima:materiaPrima[]=[]
    constructor(private http:HttpClient){
        this.http.get("http://localhost:8000/api/materiaprima/").subscribe(
            (respuesta:Object)=>{
                Object.values(respuesta).forEach((e:materiaPrima)=>{
                    this.materiaPrima.push(e)
                })
            }
        );
    }
}
