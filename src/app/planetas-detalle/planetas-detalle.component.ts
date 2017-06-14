import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunicadorService } from '../comunicador.service'

@Component({
  selector: 'app-planetas-detalle',
  templateUrl: './planetas-detalle.component.html',
  styleUrls: ['./planetas-detalle.component.css'],
  providers: [ComunicadorService]
})
export class PlanetasDetalleComponent implements OnInit {

    nombre:String;
    rotacion:String;
    traslacion:String;
    diametro:String;
    clima:String;
    gravedad:String;
    terreno:String;
    superficieAgua:String;
    poblacion:String;
    url:String;
  
  constructor(private datosRecibidos: ComunicadorService, private route: ActivatedRoute) {   }
   
  ngOnInit() {
    this.route.params.subscribe(
      params =>{
        this.url=params['peticion']
         this.datosRecibidos.buscaDato(this.url).subscribe(
          data=>{
            this.nombre = data.name;
            this.rotacion=data.rotation_period;
            this.traslacion=data.orbital_period;
            this.diametro=data.diameter;
            this.clima=data.climate;
            this.gravedad=data.gravity;
            this.terreno=data.terrain;
            this.superficieAgua=data.surface_water;
            this.poblacion=data.population;            
          }
        );
      });
  }

}
