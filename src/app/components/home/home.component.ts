import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ErrorComponent } from '../shared/alert/error/error.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	newSongs: any[] = [];
	loading: boolean = false;

	error: any = [
		{ 
			flag: false,
		}, {
			title: '',
		}, {
			description: '',
		}];

	myTopTracks: any;

	constructor(
		private _spotyfiSVC: SpotifyService,
	) { }

	ngOnInit(): void {
		
		this.loading = true;

		this._spotyfiSVC.getNewRealises()
			.subscribe((data: any) => {

				this.newSongs = data;
				this.loading = false;

			}, (error_spotyfiSVC) => {

				this.loading = false;
				this.error.flag = true;

				this.error.title ='Error ' + error_spotyfiSVC.error.error.status;
				this.error.description = error_spotyfiSVC.error.error.message;

				console.log(error_spotyfiSVC);
			});

		this._spotyfiSVC.GetUser_TopArtistsAndOrTracks('track')
		.subscribe((data: any) => {
			console.log(data);
			
		});
	}

}