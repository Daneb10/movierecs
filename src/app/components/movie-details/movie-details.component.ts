import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  details: any;
  count: number = 0;
  disabledbutton = true;

  addRecInfo(id) {
    localStorage.setItem('recId', id);
    this.count++;
    this.disabledbutton = !this.disabledbutton;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieById().subscribe((details) => {
      this.details = details;
    });
  }
}
