import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service'
import { FiltroEspeciesPipe } from '../filtro-especies.pipe'


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css'],
  providers: [ComunicadorService]
})

export class VehiculosComponent implements OnInit {

  listaVehiculos : any;
  siguiente : String;
  mostrarBoton:boolean;
  nombre:String;

  constructor(private datosRecibidos: ComunicadorService) {
    this.listaVehiculos=[];
    this.mostrarBoton=true;
   }

   avance(url){
     this.datosRecibidos.buscaPaginaExtra(url).subscribe(
       data => {
          this.listaVehiculos = this.listaVehiculos.concat(data.results);
          this.siguiente = data.next
          if(data.next==null){
            this.mostrarBoton=false;
          }
      })
   }

  ngOnInit() {
    this.datosRecibidos.buscaVehiculo().subscribe(
      data =>{
        this.listaVehiculos = this.listaVehiculos.concat(data.results);
        this.siguiente = data.next;
      });
  }
}
