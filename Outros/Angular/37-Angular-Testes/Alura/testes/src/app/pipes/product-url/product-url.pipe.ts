import { inject, InjectionToken, Pipe, PipeTransform } from '@angular/core';
import { toNumberProperty } from '../../utils/type-coercion';

export const PRODUCT_URL = new InjectionToken<string | null>('Product Url', {
  providedIn: 'root',
  factory: () => {
    console.warn("Don't forget to provide URL Token")
    return null;
  }
})

@Pipe({
  name: 'productUrl',
  standalone: true,
})
export class ProductUrlPipe implements PipeTransform {
  private baseUrl = inject(PRODUCT_URL);

  transform(productId: string | number): string {
    const id = toNumberProperty(productId);
    if (!this.baseUrl) {
      throw new Error(`Base URL was not provided...`);
    }
    if (!id) {
      throw new Error(`Invalid product id... Provided: '${productId}'`);
    }
    return `${this.baseUrl}/product/${id}`;
  }
}
