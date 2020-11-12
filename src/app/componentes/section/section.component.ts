import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularService } from 'src/app/servicios/formular.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  user:string="Anonimo"
  constructor(private formularService:FormularService,private router:Router) { }
  ngOnInit(): void {
  }
  onAlimento(){
    const titulo:string="Formular Alimento";
    const navegacion:boolean=true;
    this.formularService.titulo=titulo
    this.formularService.navegacion=navegacion
  }

}
