import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  template: `
  <h1>Promise</h1>
    <p>
      <button class="btn btn-primary">Button 1</button>
    </p>
  `,
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
