import { Component, OnInit } from '@angular/core';
import { ComunicadorService } from '../comunicador.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [ComunicadorService]
})

export class InicioComponent implements OnInit {

  listaPelis : any;

  constructor(private datosRecibidos: ComunicadorService) { }

  ngOnInit() {
     this.datosRecibidos.buscaInicio().subscribe(
      data => this.listaPelis=data.results
    );
  }

}
