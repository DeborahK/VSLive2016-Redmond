import { Component, OnInit }  from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';
import { MovieFilterPipe } from './movieFilter.pipe';

@Component({
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    pipes: [MovieFilterPipe]
})
export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List';
    listFilter: string = '';
    showImage: boolean = false;
    movies: IMovie[];
    errorMessage: string;

    constructor(private _movieService: MovieService) {
    }

    ngOnInit() { this.getMovies(); }

    getMovies() {
        this.movies = this._movieService.getMovies();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
