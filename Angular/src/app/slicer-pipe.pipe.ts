import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicerPipe'
})
export class SlicerPipe implements PipeTransform {

  transform(str: string, x:number){
    if (str.length>x){
      return str.slice(0, x)+'...';
    }
    else {
      return str;
    }
}
}
