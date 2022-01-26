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
  transform(chave: any ) {
    let json = JSON.parse(JSON.stringify(i18n));
    const idioma = localStorage.getItem('language')?.toUpperCase() as any;
    const chaveArr = chave.split('.');

    if (chaveArr.length > 1) {
      chaveArr.forEach((k: string) => {
				// valida se não vai quebrar o sistema
        if (json[k] !== undefined) {
          json = json[k]; 
        }
      })
    } else {
			// valida se não vai quebrar o sistema
      if (json[chave] !== undefined)
      json = json[chave];
    }      

    if (json[idioma] === undefined ) {
      return `? [${chave}]`;
    } else {
      return json[idioma];
    }
  }
}