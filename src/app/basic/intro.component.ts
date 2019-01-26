import { Component, OnInit, ViewChild, ViewRef, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-intro',
  template: `
    <h1>RxJS Playground</h1>
    <button #btn class="btn btn-primary">Button</button>
    <app-list #list></app-list>
  `,
  styles: []
})
export class BasicIntroComponent implements OnInit {

  @ViewChild('btn')
  btn: ElementRef;

  @ViewChild('list')
  list: ListComponent;

  constructor() { }

  ngOnInit() {

    const button = this.btn.nativeElement;

    console.log('btn', button);

    console.log('list', this.list);

    const log = (...args) => this.list.add(...args);

    log('my value label', 'my value to log');
    log('my value to log');
    log('my value label', 'my value to log');

    button.addEventListener('click', log);

  }

}
