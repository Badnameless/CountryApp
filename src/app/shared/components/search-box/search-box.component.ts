import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { CountriesService } from '../../../countries/services/countries.service';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  private debouncer: Subject<string> = new Subject();

  private debouncerSubscription = new Subscription();

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  @Input()
  public value: string = '';

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(750)
      ).subscribe( value => {
        this.onDebounce.emit( value );
      })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription.unsubscribe();
  }

  emitTerm( term: string ): void {
    this.onValue.emit( term );
  }

  onKeyPress( term: string ){
    this.debouncer.next( term );
  }


}
