import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountriesService {
  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([])),
        delay( 2000 )
      );
  }

  // Funcion que devuelve un solo objeto tipo Country o un null
  SearchByAlphaCode( term: string ): Observable<Country | null>{
    return this.http.get<Country[]>(`${API_URL}/alpha/${term}`)
      .pipe(
        // Si el tamaño de countries es mayor que 0 entonces devuelve el primer objeto del array
        // Si no, devuelve null
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of(null)),
        delay( 1000 )
      )
  }

  SearchRegion( term: string ): Observable<Country[]>{
    return this.getCountriesRequest(`${API_URL}/region/${term}`);
  }

  SearchCountry( term: string ): Observable<Country[]>{
    return this.getCountriesRequest(`${API_URL}/name/${term}`);
  }

  SearchCapital( term:string ): Observable<Country[]>{
    return this.getCountriesRequest(`${API_URL}/capital/${term}`);

  }
}
