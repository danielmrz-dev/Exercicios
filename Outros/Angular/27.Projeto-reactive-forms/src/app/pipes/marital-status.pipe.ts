import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatus } from '../enums/marital-status.enum';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {

  transform(value: number | undefined): string {
    
    const maritalStatusList: { [key: number]: string } = {
      [MaritalStatus.SINGLE]: "Solteiro(a)",
      [MaritalStatus.MARRIED]: "Casado(a)",
      [MaritalStatus.DIVORCED]: "Divorciado(a)",
    }

    return value ? maritalStatusList[value] : "";
  }

}
