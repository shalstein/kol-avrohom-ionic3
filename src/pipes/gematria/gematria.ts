import { Pipe, PipeTransform } from '@angular/core';
import dafConverter from 'daf-converter';
/**
 * Generated class for the GematriaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'gematria',
})
export class GematriaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(pageValue: any) {
    const number = parseInt(pageValue);
    
    if (isNaN(number)){
      return number;
    }
    return dafConverter(pageValue);
  }
}
