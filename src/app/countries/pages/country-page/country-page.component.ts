import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { delay, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  standalone: false,
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  public country?: Country;

  constructor(private activatedRoute: ActivatedRoute,
              private countriesService: CountriesService,
              private router: Router){}

  public isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading= true;

    // Accedo a los parametros del Observable de la ruta
    this.activatedRoute.params
      .pipe(
        // Utilizo el id de la ruta para generar un nuevo Observable tipo Country basado en el return de la función SearchByAlphaCode()
        // de mi servicio countriesService
        switchMap(({ id }) => this.countriesService.SearchByAlphaCode(id)),
        delay(1000)
      )
      // Me subscribo a el Observable final
      .subscribe( country => {
      console.log({ country })
      if(!country){
        return this.router.navigateByUrl('');
      }
        this.country = country;
      return country

      this.isLoading = false
    });
  }

}
