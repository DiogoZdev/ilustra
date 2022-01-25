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
  transform(key: string ) {
    let language = localStorage.getItem('language') as any;
    let path = JSON.parse(JSON.stringify(i18n));
    let keyArray = key.split('.');
    keyArray.length > 1
      ? keyArray.forEach((el) => {path = path[el];})
      : path = path[key];    
    return path[language] || "erro";
  }
}