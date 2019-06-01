import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryConvert'
})
export class CategoryConvertPipe implements PipeTransform {
    constructor() { };

  transform(value: number, args?: any): string {
      switch (value) {
          case 1:
              return "Sport";
              break;
          case 2:
              return "Hemelektronik";
              break;
          case 3:
              return "Leksaker";
              break;
          case 4:
              return "Klader";
              break;
          default:
              return "";
              break;
      }
  }

}
