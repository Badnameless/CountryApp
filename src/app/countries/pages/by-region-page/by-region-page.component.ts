import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor( private countriesService:CountriesService ){}

  public countries: Country[] = [];

  SearchByRegion( term: string ){
    this.countriesService.SearchRegion( term )
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
