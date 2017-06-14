import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPersonajes'
})
export class FiltroPersonajesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
