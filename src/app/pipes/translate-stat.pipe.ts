import { Pipe, PipeTransform } from '@angular/core';

type TStats =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

@Pipe({
  name: 'translateStat'
})
export class TranslateStatPipe implements PipeTransform {

  transform(value: string | TStats): string {
    switch (value) {
      case 'hp':
        return 'PS'
      case 'attack':
        return 'attacco'
      case 'defense':
        return 'difesa'
      case 'special-attack':
        return 'attacco speciale'
      case 'special-defense':
        return 'difesa speciale'
      case 'speed':
        return 'velocità'
    }
    return value;
  }

}
