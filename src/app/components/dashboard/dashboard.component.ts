import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  title: String;
  result: any;

  searchMovie(title: String) {
    this.movieService.searchMovieByTitle(title).subscribe((result) => {
      this.result = result;
      console.log(result);
    });
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}
}
