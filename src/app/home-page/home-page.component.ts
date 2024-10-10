import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { movieData } from '../model/fetchData';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{

  movie:movieData = {
    Title: '',
    Poster: ''
  }

  constructor(private service:FetchDataService){}

  ngOnInit(): void {
      this.getMovie('Batman Begins')
  }

  getMovie(searchName:string){
    this.service.getMovie(searchName).subscribe(
      {
        next: (res) => {
          this.movie = {
            Title: res.Title,
            Poster: res.Poster
          }
        }
      }
    )
  }

}
