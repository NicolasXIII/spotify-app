import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {

	market!: string;
	private _token = 'BQCwe4tW93id2OEnCqLOMxffWbXnIxZVFASlmpQSUc5KSl3XfzbOoibPj1K4cwqGFUIw7GAGu7mPBuMNBGg';
	private _headers = new HttpHeaders(
		{
			Authorization: 'Bearer ' + this._token
		}
	);

	constructor(
		private _http: HttpClient
	) { }

	getQuery(query: string) {
		const url = 'https://api.spotify.com/v1/' + query;

		return this._http.get(url, { headers: this._headers });
	}


	getNewRealises() {

		return this.getQuery('browse/new-releases')
			.pipe(map((data: any) => {

				//console.log('data sin filtrar', data);
				//console.log('\ndata filtrado', data.albums.items);

				return data = data.albums.items;
			}));
	}

	getSearchedTracks(track: string) {
		const result = this.getQuery('search?q=' + track + '&type=track');

		//devolucion
		return result.pipe(map((data: any) => {

			data = data.tracks.items;
			//console.log(data);

			return data;
		}));
	}

	getSearchedArtists(artist: string) {
		const result = this.getQuery('search?q=' + artist + '&type=artist');

		//devolucion
		return result.pipe(map((data: any) => {

			data = data.artists.items;
			//console.log(data);
			return data;
		}));
	}
	/* 
		get_GottaGoSearch(param: string, type: string, param2?: string): Observable<any> {
			let result: any;
	
			if (type === 'artist') {
	
				result = this.getQuery('search?q=' + param + '&type=artist');
	
			} else if (type === 'track') {
	
				result = this.getQuery('search?q=' + param + '&type=track');
	
			} else if (type === 'all') {
	
				//orden de los campos del form [canciones] y [artista]
				const resultT = this.getQuery('search?q=' + param + '&type=track');
				const resultA = this.getQuery('search?q=' + param2 + '&type=artist');
	
	
			}
	
			//devolucion
			return result.pipe(map((data: any) => {
	
	
				if (type === 'artist') {
	
					console.log('data sin filtrar', data);
					console.log('\ndata filtrado', data.artists.items);
					data = data.artists.items;
	
				} else if (type === 'track') {
	
					console.log('data sin filtrar', data);
					console.log('\ndata filtrado', data.tracks.items);
					data = data.tracks.items;
				}
	
				return data;
			}));
		}
	 */
	getArtist(id: string) {
		return this.getQuery('artists/' + id);
	}
	
	getTopTracks(artistId: string, marketXX: string) {
		this.market = marketXX;

		return this.getQuery('artists/' + artistId + '/top-tracks' + '?market=' + this.market);
		/* .pipe( map((data: any) => {
			data = data.tracks.items;
			console.log(data);
			
			return data;
		})
		); */
	}

	getArtistAlbums(artistId: string){

		return this.getQuery('artists/'+ artistId + '/albums?include_groups=single%2Cappears_on' + '&limit=50')
		/* .pipe(map((data: any) => {

			console.log('getArtistAlbums', data);
			data = data.items;
			return data;
		})); */
	}

	GetUser_TopArtistsAndOrTracks(type: string, both?: string){
		
		if(!both){
			return this.getQuery('me/top/' + type)

		} else {
			return this.getQuery('me/top/' + 'artist%2Ctrack')
		}
	}

	getAlbumSongs(id: string){
		return this.getQuery('albums/'+ id +'/tracks?limit=50');		
	}

	getAlbumSongs2(){
		const result = this.getQuery('albums/'+ '4aawyAB9vmqN3uQ7FjRGTy' +'/tracks?limit=10');
		result.toPromise();
		console.log(result);
		return result;
	}

}
