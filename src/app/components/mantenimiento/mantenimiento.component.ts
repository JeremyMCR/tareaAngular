import { Component, OnInit } from '@angular/core';
import { articulo } from 'src/app/models/articulo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {
  nueva: articulo = new articulo()

  lista: articulo[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

  ValidarPersona() {
    const found = this.lista.find(x=> x.codigo == this.nueva.codigo)
    if(found){
      return "Ya existe un articulo con ese código";
    }

    if(String(this.nueva.codigo).length == 0||this.nueva.codigo == -1){
      return "Debe digitar un codigo";
    }

    if(this.nueva.nombre.length == 0){
      return "Debe digitar un nombre";
    }
    
    if(this.nueva.precio < 1){
      return "Debe ingresar un precio";
    }

    if(this.nueva.impuesto < 1){
      return "Debe ingresar un porcentaje de impuesto";
    } 
    
    if( this.nueva.impuesto > 99){
      
      return "El impuesto no puede ser del 100% o mayor";
    }
    return "";
    
  }

  Guardar(){
    let error = this.ValidarPersona();

    if(error != ""){
      Swal.fire("¡Error!", error, "error")
    }else{
      this.lista.push(this.nueva);
      this.nueva = new articulo();
    }
  }
}
