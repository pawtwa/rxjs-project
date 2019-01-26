import { Component, OnInit, ViewChild, ViewRef, ElementRef } from '@angular/core';
import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-promises',
  template: `
    <h1>Callbacks</h1>
    <button #btn class="btn btn-primary">Button</button>
    <app-list #list></app-list>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {

  @ViewChild('btn')
  btn: ElementRef;

  @ViewChild('list')
  list: ListComponent;

  constructor() { }

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;

    // callbacks
    const onClick = (e) => {
      log(e);
      button.removeEventListener('click', onClick);
    };
    button.addEventListener('click', onClick);



  }

}
