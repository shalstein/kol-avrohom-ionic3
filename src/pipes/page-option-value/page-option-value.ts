import { Pipe, PipeTransform } from '@angular/core';
import dafConverter from 'daf-converter';
/**
 * Generated class for the PageOptionValuePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pageOptionValue',
})
export class PageOptionValuePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(index: number) {
    const pageNumber = index + 2
    let numberString = pageNumber <= 9 ? '0' : ''
    return numberString + pageNumber
  }
}
