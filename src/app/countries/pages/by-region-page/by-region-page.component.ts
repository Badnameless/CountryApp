import { Translation } from './../../interfaces/country';
import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  constructor( private countriesService:CountriesService ){}

  public isLoading:      boolean = false;

  public selectedRegion: string  = '';

  public countries: Country[] = [];

  SearchByRegion( term: string ){
    this.isLoading = true;

    this.selectedRegion = term;

    this.countriesService.SearchRegion( term )
      .subscribe(countries => {
        this.countries = countries;

        this.isLoading = false;
      });
  }
}
