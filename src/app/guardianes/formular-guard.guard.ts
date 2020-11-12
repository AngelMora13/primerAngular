import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FormularService } from '../servicios/formular.service';

@Injectable({
  providedIn: 'root'
})
export class FormularGuardGuard implements CanActivate {
  constructor(private router:Router, private formularService:FormularService){}
  canActivate(){
    if (!this.formularService.seleccionMP[0]){
      this.router.navigate(["/formular"]);
      return false;
    }else{
      return true;
    }

  }
  
}

@Injectable({
  providedIn: 'root'
})
export class FormularGuard implements CanActivate {
  constructor(private router:Router, private formularService:FormularService){}
  canActivate(){
    if(this.formularService.titulo==""){
      this.router.navigate([""]);
      return false;
    }else{
      return true;
    }
  }
}
