import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunicadorService } from '../comunicador.service'

@Component({
  selector: 'app-naves-detalle',
  templateUrl: './naves-detalle.component.html',
  styleUrls: ['./naves-detalle.component.css'],
  providers: [ComunicadorService]
})
export class NavesDetalleComponent implements OnInit {

    nombre:String;
    modelo:String;
    manufacturador:String;
    costeCreditos:String;
    largo:String;
    velocidadAtmosfericaMaxima:String;
    tripulacionMinima:String;
    pasajerosMaximos:String;
    capacidadCarga:String;
    hiperimpulsor:String;
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
            this.velocidadAtmosfericaMaxima=data.max_atmosphering_speed;
            this.tripulacionMinima=data.crew;
            this.pasajerosMaximos=data.passengers; 
            this.capacidadCarga=data.cargo_capacity;
            this.hiperimpulsor=data.hyperdrive_rating;
            this.clase=data.starship_class;           
          }
        );
      });
  }
}
