import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper from 'swiper';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

@Component({
  selector: 'app-swiper-vinyl-disk',
  templateUrl: './swiper-vinyl-disk.component.html',
  styleUrls: ['./swiper-vinyl-disk.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperVinylDiskComponent implements OnInit {

  @Input() artistID !: string;
  @Input() albums !: any[];

  tracksOfAlbum !: any[];

  constructor() { }

  ngOnInit(): void {

  }

}
