import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  template: `
    <h1>
      Create Observables
    </h1>
    <p>
    dostępne metody: Create, Defer, Empty/Never/Throw, From, Interval, Just, Range, Repeat, Start, and Timer
    </p>
  `,
  styles: []
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
