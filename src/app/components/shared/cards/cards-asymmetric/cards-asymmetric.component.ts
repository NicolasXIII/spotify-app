import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cards-asymmetric',
	templateUrl: './cards-asymmetric.component.html',
	styleUrls: ['./cards-asymmetric.component.scss']
})
export class CardsAsymmetricComponent implements OnInit {

	@Input() cards: any[] = [];
	@Input() type !: string;
	id!: string;

	constructor(
		private _router: Router,
	) { }

	ngOnInit(): void {
	}

	getId(card: any) {

		console.log(card);

		if (card.type == 'artist') {
			console.log('artist ', card.artists[0].id);
			this.id = card.artists[0].id;

		} else if (card.type === "album") {
			return console.log('error, no se ha realizado -', card.type);
		}
	}
}
