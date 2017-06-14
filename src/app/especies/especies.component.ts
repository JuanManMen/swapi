import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service'
import { FiltroEspeciesPipe } from '../filtro-especies.pipe'

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css'],
  providers: [ComunicadorService]
})

export class EspeciesComponent implements OnInit {

  listaEspecies : any;
  siguiente : String;
  mostrarBoton:boolean;
  nombre:String;

  constructor(private datosRecibidos: ComunicadorService) {
    this.listaEspecies=[];
    this.mostrarBoton=true;
   }

   avance(url){
     this.datosRecibidos.buscaPaginaExtra(url).subscribe(
       data => {
          this.listaEspecies = this.listaEspecies.concat(data.results);
          this.siguiente = data.next
          if(data.next==null){
            this.mostrarBoton=false;
          }
      })
   }

  ngOnInit() {
    this.datosRecibidos.buscaEspecie().subscribe(
      data =>{
        this.listaEspecies = this.listaEspecies.concat(data.results);
        this.siguiente = data.next;
      });
  }

}
