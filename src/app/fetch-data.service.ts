import { Injectable } from '@angular/core';
import { movieData } from './model/fetchData';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private baseUrl:String = ''
  private apiKey:string = ''

  private movieData: movieData|any

  constructor(
    private http:HttpClient
  ) {
    this.baseUrl = environment.movieApi
    this.apiKey = environment.apiKey
  }

  getMovie(movieName:string):Observable<movieData>{
    this.movieData = this.http.get<movieData>(this.baseUrl + movieName + this.apiKey)
    return this.movieData
  }

}
