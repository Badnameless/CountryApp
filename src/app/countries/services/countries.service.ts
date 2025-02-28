import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { countriesCache } from '../interfaces/countries-cache.interface';
import { Region } from '../interfaces/region.type';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({providedIn: 'root'})
export class CountriesService{

  public cacheStore: countriesCache = {
    byCapital: {countries: [], term: ''},
    byCountry: {countries: [], term: ''},
    byRegion:  {countries: [], region: ''},
  }

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  public saveLocalStorage(){
    localStorage.setItem('cache', JSON.stringify(this.cacheStore));
  }

  public loadLocalStorage(){
    console.log(this.cacheStore)
    if( !localStorage.getItem('cache') ) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cache')! );
    }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([])),
      )
  }

  // Funcion que devuelve un solo objeto tipo Country o un null
  SearchByAlphaCode( term: string ): Observable<Country | null>{
    return this.http.get<Country[]>(`${API_URL}/alpha/${term}`)
      .pipe(
        // Si el tamaño de countries es mayor que 0 entonces devuelve el primer objeto del array
        // Si no, devuelve null
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of(null)),
      )
  }

  SearchRegion( region: Region  ): Observable<Country[]>{
    return this.getCountriesRequest(`${API_URL}/region/${region}`)
      .pipe(
        tap( countries => this.cacheStore.byRegion = { countries, region } ),
        tap( () => this.saveLocalStorage() ),
      );
  }

  SearchCountry( term: string ): Observable<Country[]>{
    return this.getCountriesRequest(`${API_URL}/name/${term}`)
      .pipe(
        tap( countries => this.cacheStore.byCountry = { countries, term } ),
        tap( () => this.saveLocalStorage() ),
      )
  }

  SearchCapital( term:string ): Observable<Country[]>{
    return this.getCountriesRequest(`${API_URL}/capital/${term}`)
      .pipe(
          tap( countries => this.cacheStore.byCapital = { countries, term }),
          tap( () => this.saveLocalStorage() ),
      );

  }
}
