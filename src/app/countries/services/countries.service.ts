import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  SearchByAlphaCode( term: string ): Observable<Country | null>{
    return this.http.get<Country[]>(`${API_URL}/alpha/${term}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of(null))
      )
  }

  SearchRegion( term: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${API_URL}/region/${term}`)
      .pipe(
        catchError( () => of([]))
      );
  }

  SearchCountry( term: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${API_URL}/name/${term}`)
      .pipe(
        catchError( () => of([]) )
      );
  }

  SearchCapital( term:string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${API_URL}/capital/${term}`)
      .pipe(
        catchError( () => of([]))
      );
  }
}
