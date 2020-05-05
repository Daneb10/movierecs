import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  searchMovieByTitle(title: String) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=e4ec328f';
    return this.http.get(url);
  }

  getMovieById() {
    const movieId = sessionStorage.getItem('movieId');
    const url = 'http://www.omdbapi.com/?i=' + movieId + '&apikey=e4ec328f';
    return this.http.get(url);
  }

  constructor(private http: HttpClient) {}
}
