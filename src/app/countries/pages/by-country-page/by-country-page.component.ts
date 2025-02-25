import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = []

  public isLoading: boolean = false;

  constructor( private countriesService:CountriesService){}

  SearchByCountry( term: string ){
    this.isLoading = true;

    this.countriesService.SearchCountry(term).subscribe(countries => {
      this.countries = countries;

      this.isLoading = false;
    });
  }
}
