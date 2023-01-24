import { Component,OnInit } from '@angular/core';
import { MoviesService } from '../../Services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  constructor(private service: MoviesService, private activatedRoute: ActivatedRoute,private router:Router) { }

  
  movie:any;
  movieId: any;


  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');

    this.movie = this.service.movies.find(x => x.id == this.movieId);
  
  }

}
