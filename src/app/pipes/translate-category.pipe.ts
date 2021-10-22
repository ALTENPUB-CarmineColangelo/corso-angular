import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateCategory'
})
export class TranslateCategoryPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('Pokémon ', '');
  }

}
