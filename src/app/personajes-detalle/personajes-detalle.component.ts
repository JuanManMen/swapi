import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunicadorService } from '../comunicador.service'

@Component({
  selector: 'app-personajes-detalle',
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.css'],
  providers: [ComunicadorService]
})
export class PersonajesDetalleComponent implements OnInit {

    nombre:String;
    altura:String;
    peso:String;
    genero:String;
    colorPiel:String;
    colorPelo:String;
    colorOjos:String;
    nacimiento:String;
    url:String;
  
  constructor(private datosRecibidos: ComunicadorService, private route: ActivatedRoute) {   }
   
  ngOnInit() {
    this.route.params.subscribe(
      params =>{
        this.url=params['peticion']
         this.datosRecibidos.buscaDato(this.url).subscribe(
          data=>{
            this.nombre = data.name;
            this.altura=data.height;
            this.peso=data.mass;
            this.genero=data.gender;
            this.colorPiel=data.skin_color;
            this.colorPelo=data.hair_color;
            this.colorOjos=data.eye_color;
            this.nacimiento=data.birth_year;            
          }
        );
      });
  }

}
