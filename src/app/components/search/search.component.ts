import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	searchForm: FormGroup = this._fb.group({
		track: [null],
		artist: [null],
	});

	loading: boolean = false;
	table = 'traks';

	searchArtist = [];
	searchTracks = [];
	searchTracksHeaders = [
		{
			name: ''
		}, {
			name: 'Titulo',
			value: 'name'
		}, {
			name: 'Artista',
			value: 'artists',
		}, {
			name: 'Album'
		}, {
			name: 'Popularidad'
		}
	];

	error: any = [
		{ 
			flag: false,
		}, {
			title: '',
		}, {
			description: '',
		}];

	constructor(
		private _fb: FormBuilder,
		private _spotifySVC: SpotifyService,
	) { }

	ngOnInit(): void { }

	async buscar() {

		this.loading = true;

		// busqueda por artista
		if (this.searchForm.controls.track.pristine && !this.searchForm.controls.artist.pristine) {

			/* return this._spotifySVC.get_GottaGoSearch(this.searchForm.get('artist')?.value, 'artist')
				.subscribe(data => {
					this.search = data;
				}); */

			return this._spotifySVC.getSearchedArtists(this.searchForm.get('artist')?.value)
				.subscribe(data => {
					this.searchArtist = data;
					this.loading = false;
					
				}, (error_spotyfiSVC) => {

					this.loading = false;
					this.error.flag = true;
	
					this.error.title ='Error ' + error_spotyfiSVC.error.error.status;
					this.error.description = error_spotyfiSVC.error.error.message;
	
					console.log(error_spotyfiSVC);
				});

			// busqueda por cancion
		} else if (!this.searchForm.controls.track.pristine && this.searchForm.controls.artist.pristine) {

			console.log(this.searchForm.get('track')?.value);

			return this._spotifySVC.getSearchedTracks(this.searchForm.get('track')?.value)
				.subscribe(data => {
					this.searchTracks = data;
					this.loading = false;
					console.log(data);
					
				}, (error_spotyfiSVC) => {

					this.loading = false;
					this.error.flag = true;
	
					this.error.title ='Error ' + error_spotyfiSVC.error.error.status;
					this.error.description = error_spotyfiSVC.error.error.message;
	
					console.log(error_spotyfiSVC);
				});

		} else {

			/* return this._spotifySVC.get_GottaGoSearch(this.searchForm.get('track')?.value, 'all', this.searchForm.get('artist')?.value)
				.subscribe(data => {


					this.loading = false;
				}); */

			return 'not supported by nicolas';
		}

	}

}
