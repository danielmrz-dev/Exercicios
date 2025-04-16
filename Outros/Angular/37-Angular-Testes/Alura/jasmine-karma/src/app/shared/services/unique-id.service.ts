import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  private numberOfGeneratedIds = 0;

  generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw new Error("Prefix needs to be provided");
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
