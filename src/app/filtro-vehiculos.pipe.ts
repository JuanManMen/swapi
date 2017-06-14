import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroVehiculos'
})
export class FiltroVehiculosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
