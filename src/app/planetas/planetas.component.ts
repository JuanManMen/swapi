import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service'
import { FiltroEspeciesPipe } from '../filtro-especies.pipe'

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css'],
  providers: [ComunicadorService]
})
export class PlanetasComponent implements OnInit {

 listaPlanetas : any;
  siguiente : String;
  mostrarBoton:boolean;
  nombre:String;

  constructor(private datosRecibidos: ComunicadorService) {
    this.listaPlanetas=[];
    this.mostrarBoton=true;
   }

   avance(url){
     this.datosRecibidos.buscaPaginaExtra(url).subscribe(
       data => {
          this.listaPlanetas = this.listaPlanetas.concat(data.results);
          this.siguiente = data.next
          if(data.next==null){
            this.mostrarBoton=false;
          }
      })
   }

  ngOnInit() {
    this.datosRecibidos.buscaPlaneta().subscribe(
      data =>{
        this.listaPlanetas = this.listaPlanetas.concat(data.results);
        this.siguiente = data.next;
      });
  }
}
