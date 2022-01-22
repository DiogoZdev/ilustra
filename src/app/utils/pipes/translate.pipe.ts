import { Pipe, PipeTransform } from '@angular/core';
import * as i18n from '../../../assets/i18n/i18n.json';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  /**
   * Método de tradução de chave sem aninhamento.
   * @param chave chave de tradução
   * @returns valor traduzido
   */
   transform(key: any ) {
    let path = JSON.parse(JSON.stringify(i18n));
    let id = localStorage.getItem('language') as any;
    return path[key][id];
  }
}

