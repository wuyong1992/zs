import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'str'
})
export class StrPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!args) {
      args = 10;
    }
    if (value.length > args) {
      value = value.substr(0, args) + "...";
    }
    return value;
  }

}
