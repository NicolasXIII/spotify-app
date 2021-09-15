import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {  }

  //recibe el valor y luego lo que nosotros le queremos concatenar en la url, de FORMA SEGURA
  transform(value: string): SafeResourceUrl {
    //domSanitizer es un objeto que se encarga de verificar que no sea malicioso
    const url = 'https://open.spotify.com/embed/track/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
