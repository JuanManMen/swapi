import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service'
import { FiltroEspeciesPipe } from '../filtro-especies.pipe'

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css'],
  providers: [ComunicadorService]
})

export class NavesComponent implements OnInit {
  
  listaNaves : any;
  siguiente : String;
  mostrarBoton:boolean;
  nombre:String;

  constructor(private datosRecibidos: ComunicadorService) {
    this.listaNaves=[];
    this.mostrarBoton=true;
   }

   avance(url){
     this.datosRecibidos.buscaPaginaExtra(url).subscribe(
       data => {
          this.listaNaves = this.listaNaves.concat(data.results);
          this.siguiente = data.next
          if(data.next==null){
            this.mostrarBoton=false;
          }
      })
   }

  ngOnInit() {
    this.datosRecibidos.buscaNave().subscribe(
      data =>{
        this.listaNaves = this.listaNaves.concat(data.results);
        this.siguiente = data.next;
      });
  }

  }


