import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunicadorService } from '../comunicador.service'

@Component({
  selector: 'app-especies-detalle',
  templateUrl: './especies-detalle.component.html',
  styleUrls: ['./especies-detalle.component.css'],
  providers: [ComunicadorService]
})
export class EspeciesDetalleComponent implements OnInit {

    nombre:String;
    clasificacion:String;
    designacion:String;
    alturaMedia:String;
    colorPiel:String;
    colorPelo:String;
    colorOjos:String;
    esperanzaVida:String;
    url:String;
  
  constructor(private datosRecibidos: ComunicadorService, private route: ActivatedRoute) {   }
   
  ngOnInit() {
    this.route.params.subscribe(
      params =>{
        this.url=params['peticion']
         this.datosRecibidos.buscaDato(this.url).subscribe(
          data=>{
            this.nombre = data.name;
            this.clasificacion=data.classification;
            this.designacion=data.designation;
            this.alturaMedia=data.average_height;
            this.colorPiel=data.skin_colors;
            this.colorPelo=data.hair_colors;
            this.colorOjos=data.eye_colors;
            this.esperanzaVida=data.average_lifespan;            
          }
        );
      });
  }
}


