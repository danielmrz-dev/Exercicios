import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  
  set(key: string, data: unknown) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Erro ao salvar no localStorage: ', error);
    }
  }

  get(key: string): unknown {
    try {
      const storagedItem = localStorage.getItem(key);
      return storagedItem ? JSON.parse(storagedItem) : null; 
    } catch (error) {
      console.log('Erro ao obter os dados do localStorage: ', error);
      return null;
    }
  }
}
