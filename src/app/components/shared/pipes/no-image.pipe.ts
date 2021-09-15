import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[], numImg?: number) {

    if (numImg && numImg >= 0 && numImg <= 2) {
      return images[numImg].url;

    } else {
      if (!images) {
        return './../../../../assets/img/glitch-error-404-page-background_23-2148090409.jpg'

      } else if (images.length) {
        return images[0].url;
      }
    }
  }

}
