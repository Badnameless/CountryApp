import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries:Country[] = [];

  constructor(private countriesService:CountriesService){}


  SearchByCapital( term:string ){
      this.countriesService.SearchCapital( term )
      .subscribe(countries => {
        this.countries = countries
      });
  }
}
