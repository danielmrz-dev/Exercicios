import { Pipe, PipeTransform } from "@angular/core";
import { UserStatusEnum } from "../pipe-introduction/pipe-introduction.component";

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: number): string {

    const userStatusDescription: { [key: number]: string } = {
      [UserStatusEnum.ATIVO]: "Ativo",
      [UserStatusEnum.INATIVO]: "Inativo"
    }

    return userStatusDescription[value] ? userStatusDescription[value] : "Inválido"

  }
}