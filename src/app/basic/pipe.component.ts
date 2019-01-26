import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
    <h1>
      Metoda pipe() na Observable
    </h1>
    <h2>operatory</h2>
    <p>
      podstawowe: map, filter, reduce, switchMap
    </p>
    <p>
      zaawnsowane:
      debounceTime
      throttleTime
      combineLatest
      retry
      merge
      delay
      bufferTime
      switchMap
      takeUntil
    </p>
  `,
  styles: []
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
