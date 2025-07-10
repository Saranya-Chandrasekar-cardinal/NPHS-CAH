import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrandService {
  readonly brand: string;

  constructor() {
    const url = window.location.href.toLowerCase();
    if (url.includes('smp')) this.brand = 'smp';
    else if (url.includes('itm')) this.brand = 'itm';
    else this.brand = 'smp';
  }
}
