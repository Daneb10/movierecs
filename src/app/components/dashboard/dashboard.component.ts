import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: String;
  result: any;
  details: any;
  count: number = 0;
  disabledbutton = true;

  searchMovie(title: String) {
    this.movieService.searchMovieByTitle(title).subscribe((result) => {
      this.result = result;
    });
  }

  movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    this.router.navigate(['/movie']);
    return false;
  }

  addRec(id) {
    localStorage.setItem('recId', id);
    this.count++;
    this.disabledbutton = !this.disabledbutton;
  }

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getMovieById().subscribe((details) => {
      this.details = details;
    });
  }
}
