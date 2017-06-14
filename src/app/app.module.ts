import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DetalleComponent } from './detalle/detalle.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { MigaPanComponent } from './miga-pan/miga-pan.component';
import { PieComponent } from './pie/pie.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { EspeciesComponent } from './especies/especies.component';
import { NavesComponent } from './naves/naves.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PaginaErrorComponent } from "app/pagina-error/pagina-error.component";
import { EspeciesDetalleComponent } from './especies-detalle/especies-detalle.component';
import { PlanetasDetalleComponent } from './planetas-detalle/planetas-detalle.component';
import { PersonajesDetalleComponent } from './personajes-detalle/personajes-detalle.component';
import { NavesDetalleComponent } from './naves-detalle/naves-detalle.component';
import { VehiculosDetalleComponent } from './vehiculos-detalle/vehiculos-detalle.component';
import { FiltroEspeciesPipe } from './filtro-especies.pipe';
import { FiltroPlanetasPipe } from './filtro-planetas.pipe';
import { FiltroPersonajesPipe } from './filtro-personajes.pipe';
import { FiltroNavesPipe } from './filtro-naves.pipe';
import { FiltroVehiculosPipe } from './filtro-vehiculos.pipe';

const routes: Routes = [
    // La ruta '' indica la ruta por defecto (antiguo index.html)
    { path: '', component: InicioComponent },
    { path: 'especies', component: EspeciesComponent },
    { path: 'planetas', component: PlanetasComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'naves', component: NavesComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'especies/detalle/:peticion', component: EspeciesDetalleComponent },
    { path: 'planetas/detalle/:peticion', component: PlanetasDetalleComponent },
    { path: 'personajes/detalle/:peticion', component: PersonajesDetalleComponent },
    { path: 'naves/detalle/:peticion', component: NavesDetalleComponent },
    { path: 'vehiculos/detalle/:peticion', component: VehiculosDetalleComponent },
    // Cualquier otra ruta no considerada en las entradas anteriores -> ERROR
    { path: '**', component:  PaginaErrorComponent}
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    CabeceraComponent,
    DetalleComponent,
    InicioComponent,
    MenuNavegacionComponent,
    MigaPanComponent,
    PaginaErrorComponent,
    PieComponent,
    PersonajesComponent,
    PlanetasComponent,
    EspeciesComponent,
    NavesComponent,
    VehiculosComponent,
    EspeciesDetalleComponent,
    PlanetasDetalleComponent,
    PersonajesDetalleComponent,
    NavesDetalleComponent,
    VehiculosDetalleComponent,
    FiltroEspeciesPipe,
    FiltroPlanetasPipe,
    FiltroPersonajesPipe,
    FiltroNavesPipe,
    FiltroVehiculosPipe,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
