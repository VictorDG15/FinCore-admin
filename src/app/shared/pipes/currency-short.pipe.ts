import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyShort' })
export class CurrencyShortPipe implements PipeTransform {
  transform(value: number, currency = 'S/'): string {
    if (Math.abs(value) >= 1_000_000) {
      return `${currency} ${(value / 1_000_000).toFixed(1)}M`;
    }

    if (Math.abs(value) >= 1_000) {
      return `${currency} ${(value / 1_000).toFixed(1)}K`;
    }

    return `${currency} ${value.toFixed(0)}`;
  }
}
