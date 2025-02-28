import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public _countries:Country[] = [];

  public _searchValue: string = '';

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCountry.countries;
    this._searchValue = this.countriesService.cacheStore.byCountry.term;
  }

  public isLoading: boolean = false;

  SearchByCountry( term: string ){
    this._searchValue = term;
    this.isLoading = true;

    this.countriesService.SearchCountry(term)
      .subscribe(countries => {
        this._countries = countries;

        this.isLoading = false;
      });
  }
}
