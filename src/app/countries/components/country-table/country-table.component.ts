import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent{
  @Input()
  public countries: Country[] = [];

}
