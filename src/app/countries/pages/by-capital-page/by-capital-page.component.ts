import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{

  public _countries: Country[] = [];

  public _searchValue: string = '';

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byCapital.countries;
    this._searchValue = this.countriesService.cacheStore.byCapital.term;
  }

  public isLoading: boolean = false;

  SearchByCapital( term:string ){
      this._searchValue = term;
      this.isLoading = true;

      this.countriesService.SearchCapital( term )
        .subscribe( countries => {
          this._countries = countries;

          this.isLoading = false;
        });
  }
}
