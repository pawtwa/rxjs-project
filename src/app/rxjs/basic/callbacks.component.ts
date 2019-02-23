import { Component, OnInit, ViewChild, ViewRef, ElementRef } from '@angular/core';
import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { ListComponent } from 'src/app/shared/list/list.component';

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


  }
}

function ajax(url, cb) {
  fetch(url)
  .then(res => res.json())
  .then( res => cb(null, res), err => cb(err));
}

/**

    // callbacks
    const onClick = (e) => {
      ajax('/api/parse', (err, data) => {
        ajax('/api/create', (error, record) => {
          log('record', record);
        });
      });

      // button.removeEventListener('click', onClick);
    };
    button.addEventListener('click', onClick);

 */


 /**

    const onClick = (e) => {
      log('click');
      ajax('/api/parse', (err, data) => {
        log(err, data);
        ajax('/api/create', (error, record) => {
          log('record', record);
        });
      });

    };
    button.addEventListener('click', onClick);

    setTimeout(() => {
      button.removeEventListener('click', onClick);
    }, 2000);
    
  */
