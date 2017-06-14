import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-miga-pan',
  templateUrl: './miga-pan.component.html',
  styleUrls: ['./miga-pan.component.css']
})
export class MigaPanComponent implements OnInit {

  datos:any ;

  constructor(location: Location, private route: ActivatedRoute) {}
  
  ruta(){
    this.route.url.subscribe(
      params=>{this.datos=location.href}
    )
  }

  ngOnInit() {
    //this.datos=this.route.snapshot.firstChild.url[0].path;
  //this.datos = this.route.snapshot.url.join();
  // this.route.url.subscribe(
   //  params=>{ this.datos=location.href}
  // )
   }
}
