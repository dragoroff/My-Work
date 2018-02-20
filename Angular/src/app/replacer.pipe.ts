import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacer'
})
export class ReplacerPipe implements PipeTransform {

  transform(str: string): any {
    return str.split(' ').join('-');
  }

}
