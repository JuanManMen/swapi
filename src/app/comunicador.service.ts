import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class ComunicadorService {
  
  private inicio: any;
  private especies: any;
  private planetas: any;
  private personajes: any;
  private naves: any;
  private vehiculos: any;

  constructor(private ajax:Http) { }

  buscaInicio(): Observable<any> {  
      return this.ajax
      .get('http://swapi.co/api/films/')
      .map(response => response.json());
  }

  buscaEspecie(): Observable<any> {  
      return this.ajax
      .get('http://swapi.co/api/species/')
      .map(response => response.json());
  }
  
  buscaPlaneta(): Observable<any> {  
      return this.ajax
      .get('http://swapi.co/api/planets/')
      .map(response => response.json());
  }

  buscaPersonaje(): Observable<any> {  
      return this.ajax
      .get('http://swapi.co/api/people/')
      .map(response => response.json());
  }

  buscaNave(): Observable<any> {  
      return this.ajax
      .get('http://swapi.co/api/starships/')
      .map(response => response.json());
  }

  buscaVehiculo(): Observable<any> {  
      return this.ajax
      .get('http://swapi.co/api/vehicles/')
      .map(response => response.json());
  }

  buscaPaginaExtra(url): Observable<any> {  
      return this.ajax
      .get(url)
      .map(response => response.json());
  }
  
  buscaDato(url): Observable<any> {  
      return this.ajax
      .get(url)
      .map(response => response.json());
  }
}
