import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output()
  public onValue = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  emitTerm( term: string ): void {
    this.onValue.emit(term);
  }


}
