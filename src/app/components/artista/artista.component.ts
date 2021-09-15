import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	selector: 'app-artista',
	templateUrl: './artista.component.html',
	styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

	market: string = 'jp';
	tableArtist: string = 'artist';
	artist: any;
	loading!: boolean;
	traks = [];
	albums = []
	headers = [
		{
			name: '',
		}, {
			name: 'track',
			value: 'name',
		}, {
			name: 'album',
			value: 'album.name',
		},
	];

	constructor(
		private _route: ActivatedRoute,
		private _spotifySVC: SpotifyService,
	) { }

	ngOnInit(): void {
		this.loading = true;
		const id = this._route.snapshot.paramMap.get('id');

		if (id) {
			this._spotifySVC.getArtist(id)
				.subscribe(artist => {
					this.artist = artist;
					this.loading = false;

					this.getTopTracks();
					this.getAlbums();
				});
		}
	}

	// async
	getTopTracks() {
		// this.traks = await this._spotifySVC.getTopTracks(this.artist.id).toPromise();		

		this._spotifySVC.getTopTracks(this.artist.id, this.market)
			.subscribe((data: any) => {
				this.traks = data.tracks;
				console.log('toptracks', this.traks);
			});
	}

	getAlbums() {

		this._spotifySVC.getArtistAlbums(this.artist.id).subscribe((data: any) => {
			this.albums = data.items;
			console.log('albums', this.albums);		
		});
	}

}
