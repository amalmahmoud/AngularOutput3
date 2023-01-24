import { Component,OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private moviesService: MoviesService) { }

  movies: any = [];

  ngOnInit(): void {
    this.movies = this.moviesService.movies;
  }

}
