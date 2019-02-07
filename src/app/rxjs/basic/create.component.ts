import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from 'src/app/shared/list/list.component';
import { Observable, fromEvent, interval, of, empty, EMPTY, range, timer, throwError } from 'rxjs';

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



    // const stream$ = interval(1000);
    // const stream$ = of(1000);
    // const stream$ = empty();
    // const stream$ = EMPTY;
    // const stream$ = range(2, 4);
    // const stream$ = timer(2000);
    const stream$ = throwError('custom error');


    stream$.subscribe(
      (val) => log('next', val),
      (err) => log('error', err),
      () => log('complete')
    );


    const btn$ = Observable.create((obs) => {

      let counter = 0;
      function onClick(e) {
        if (counter > 3) {
          return obs.error('nie nie nie ');
        }
        counter++;
        obs.next(e);
      }
      button.addEventListener('click', onClick);

      return () => {
        log('clean your resources');
        button.removeEventListener('click', onClick);
      };
    });
    // btn$.subscribe(
    //   (val) => log('next', val),
    //   (err) => log('error', err),
    //   () => log('complete')
    // );

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
