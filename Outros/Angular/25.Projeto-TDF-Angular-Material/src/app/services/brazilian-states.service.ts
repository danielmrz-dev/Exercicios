import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatesListResponse } from '../types/states-list-response';

@Injectable({
  providedIn: 'root',
})
export class BrazilianStatesService {
  private readonly statesList: StatesListResponse = [
    { id: 1, descricao: 'Acre', descricaoContraida: 'AC' },
    { id: 2, descricao: 'Alagoas', descricaoContraida: 'AL' },
    { id: 3, descricao: 'Amapá', descricaoContraida: 'AP' },
    { id: 4, descricao: 'Amazonas', descricaoContraida: 'AM' },
    { id: 5, descricao: 'Bahia', descricaoContraida: 'BA' },
    { id: 6, descricao: 'Ceará', descricaoContraida: 'CE' },
    { id: 7, descricao: 'Distrito Federal', descricaoContraida: 'DF' },
    { id: 8, descricao: 'Espírito Santo', descricaoContraida: 'ES' },
    { id: 9, descricao: 'Goiás', descricaoContraida: 'GO' },
    { id: 10, descricao: 'Maranhão', descricaoContraida: 'MA' },
    { id: 11, descricao: 'Mato Grosso', descricaoContraida: 'MT' },
    { id: 12, descricao: 'Mato Grosso do Sul', descricaoContraida: 'MS' },
    { id: 13, descricao: 'Minas Gerais', descricaoContraida: 'MG' },
    { id: 14, descricao: 'Pará', descricaoContraida: 'PA' },
    { id: 15, descricao: 'Paraíba', descricaoContraida: 'PB' },
    { id: 16, descricao: 'Paraná', descricaoContraida: 'PR' },
    { id: 17, descricao: 'Pernambuco', descricaoContraida: 'PE' },
    { id: 18, descricao: 'Piauí', descricaoContraida: 'PI' },
    { id: 19, descricao: 'Rio de Janeiro', descricaoContraida: 'RJ' },
    { id: 20, descricao: 'Rio Grande do Norte', descricaoContraida: 'RN' },
    { id: 21, descricao: 'Rio Grande do Sul', descricaoContraida: 'RS' },
    { id: 22, descricao: 'Rondônia', descricaoContraida: 'RO' },
    { id: 23, descricao: 'Roraima', descricaoContraida: 'RR' },
    { id: 24, descricao: 'Santa Catarina', descricaoContraida: 'SC' },
    { id: 25, descricao: 'São Paulo', descricaoContraida: 'SP' },
    { id: 26, descricao: 'Sergipe', descricaoContraida: 'SE' },
    { id: 27, descricao: 'Tocantins', descricaoContraida: 'TO' },
  ];

  getStates(): Observable<StatesListResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.statesList);
        observer.complete();
      }, 3000);
    });
  }

  getStateDescription(stateId: number): string {
    const stateDescription = this.statesList.find((state) => state.id === stateId)?.descricao
    
    return stateDescription ? stateDescription : '';

  }
}
