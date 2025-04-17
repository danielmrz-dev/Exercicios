import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  private numberOfGeneratedIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw new Error("Prefix provided is invalid");      
    }
    
    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
