import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunicadorService } from '../comunicador.service'

@Component({
  selector: 'app-vehiculos-detalle',
  templateUrl: './vehiculos-detalle.component.html',
  styleUrls: ['./vehiculos-detalle.component.css'],
  providers: [ComunicadorService]
})
export class VehiculosDetalleComponent implements OnInit {

    nombre:String;
    modelo:String;
    manufacturador:String;
    costeCreditos:String;
    largo:String;
    mva:String;
    tripulacion:String;
    pasajeros:String;
    carga:String;
    suministros:String;
    clase:String;
    url:String;
  
  constructor(private datosRecibidos: ComunicadorService, private route: ActivatedRoute) {   }
   
  ngOnInit() {
    this.route.params.subscribe(
      params =>{
        this.url=params['peticion']
         this.datosRecibidos.buscaDato(this.url).subscribe(
          data=>{
            this.nombre = data.name;
            this.modelo=data.model;
            this.manufacturador=data.manufacturer;
            this.costeCreditos=data.cost_in_credits;
            this.largo=data.length;
            this.mva=data.max_atmosphering_speed;
            this.tripulacion=data.crew;
            this.pasajeros=data.passengers;       
            this.carga=data.cargo_capacity;
            this.suministros=data.consumables;
            this.clase=data.vehicle_class;     
          }
        );
      });
  }

}
