import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPlanetas'
})
export class FiltroPlanetasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
