import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      let keys = [];
      for (var enumItem in value) {
          if (!isNaN(parseInt(enumItem, 10))) {
              keys.push({ key: enumItem, value: value[enumItem] });
          }
      }
      return keys;
  }

}
