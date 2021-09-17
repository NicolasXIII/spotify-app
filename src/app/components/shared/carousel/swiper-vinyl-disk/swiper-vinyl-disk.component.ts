import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import Swiper, { EffectCoverflow, Pagination } from 'swiper';
/* import SwiperCore, { EffectCoverflow, Pagination } from "swiper"; */
import SwiperCore from 'swiper';

@Component({
  selector: 'app-swiper-vinyl-disk',
  templateUrl: './swiper-vinyl-disk.component.html',
  styleUrls: ['./swiper-vinyl-disk.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperVinylDiskComponent implements OnInit {

  @Input() artistID !: string;
  @Input() albums !: any[];

  headers = [
    {
      name: 'Número'
    },
    {
      name: 'Nombre'
    },
    {
      name: 'Popularidad'
    },
    {
      name: 'Cancion'
    },
  ];
  data: any[] = [];

  tracksOfAlbum !: any[];

  constructor(
    private _spotiSVC: SpotifyService,
  ) { }

  ngOnInit(): void {

    this.swiperPass(0);
  }

  swiperPass(i: number) {

    const result = this._spotiSVC.getAlbumSongs(this.data[i].id).
      subscribe((data: any) => {
        console.log('data', data);
        this.data = data.items;
      });

    return result
  }

}
