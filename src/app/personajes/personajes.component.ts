import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service';
import { FiltroEspeciesPipe } from '../filtro-especies.pipe'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [ComunicadorService]
})
export class PersonajesComponent implements OnInit {

  listaPersonajes : any;
  siguiente : String;
  mostrarBoton:boolean;
  nombre:String;

  constructor(private datosRecibidos: ComunicadorService) {
    this.listaPersonajes=[];
    this.mostrarBoton=true;
   }

   avance(url){
     this.datosRecibidos.buscaPaginaExtra(url).subscribe(
       data => {
          this.listaPersonajes = this.listaPersonajes.concat(data.results);
          this.siguiente = data.next
          if(data.next==null){
            this.mostrarBoton=false;
          }
      })
   }

  ngOnInit() {
    this.datosRecibidos.buscaPersonaje().subscribe(
      data =>{
        this.listaPersonajes = this.listaPersonajes.concat(data.results);
        this.siguiente = data.next;
      });
  }

}
