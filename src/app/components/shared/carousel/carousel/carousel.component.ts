import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	providers: [
		{
			provide : CarouselConfig,
			useValue:
			{
				noPause 	   : false,
				interval       : 3000,
				isAnimated     : true,
				pauseOnFocus   : false,
				showIndicators : true,
				
			}
		}
	],
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

	artists: any[] = [
		{
			name: 'Yousei Teikoku',
			img: '../../../../assets/musica-albums/yousei_teikoku_-_shadow_corpse.jpg'
		}, {
			name: 'Disturbed',
			img: '../../../../assets/musica-albums/disturbed_-_asylum.jpg'
		}, {
			name: 'Starset',
			img: '../../../../assets/musica-albums/starset.jpg'
		}
	];

	noWrapSlides = false;

	constructor() { }

	ngOnInit(): void {
	}
}
