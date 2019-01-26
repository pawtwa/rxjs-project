import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-create',
  template: `
    <h1>
      Create Observables
    </h1>
    <p>
    dostępne metody: Create, Defer, Empty/Never/Throw, From, Interval, Just, Range, Repeat, Start, and Timer
    </p>
    <button #btn class="btn btn-primary">Button</button>
    <app-list #list></app-list>
  `,
  styles: []
})
export class CreateComponent implements OnInit {

  @ViewChild('btn')
  btn: ElementRef;

  @ViewChild('list')
  list: ListComponent;

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;

    const btn$ = Observable.create((obs) => {
      button.addEventListener('click', (e) => {
        obs.next(e);
      });
    });

    btn$.subscribe(
      (val) => log('next', val),
      (err) => log('error', err),
      () => log('complete')
    );

  }
}

/**

    const btn$ = Observable.create((obs) => {
      obs.next('custom value 1');
      // obs.error('custom error');
      // obs.complete();
      obs.next('custom value 2');
      const onClick = (e) => {
        obs.next(e);
      };
      button.addEventListener('click', onClick);

      return () => {
        log('clean your resources');
        button.removeEventListener('click', onClick);
      };

    });
 */
