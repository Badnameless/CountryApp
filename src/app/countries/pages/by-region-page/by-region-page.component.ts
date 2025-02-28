import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public region: Region = '';

  public isLoading: boolean  = false;

  public selectedRegion?: Region = 'Africa';

  public _countries:Country[] = [];

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this._countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  SearchByRegion( term: Region ){
    this.isLoading = true;

    this.selectedRegion = term;

    this.countriesService.SearchRegion( term )
      .subscribe(countries => {
        this._countries = countries;

        this.isLoading = false;
      });
  }
}
