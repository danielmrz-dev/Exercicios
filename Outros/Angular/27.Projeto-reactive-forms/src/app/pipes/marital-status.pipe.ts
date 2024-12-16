import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatus } from '../enums/marital-status.enum';
import { maritalStatusDescriptionMap } from '../utils/marital-status-description-map';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {
  transform(value: number | undefined): string {
    return value ? maritalStatusDescriptionMap[value as MaritalStatus] : "";
  }
}
