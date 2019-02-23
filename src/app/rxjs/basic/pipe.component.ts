import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from 'src/app/shared/list/list.component';

import { Observable, fromEvent, interval, Subject, Subscription } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, debounce, groupBy, filter, bufferTime, buffer, retry, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-pipe',
  template: `
    <h1>
      Metoda pipe() na Observable
    </h1>
    <h2>operatory</h2>
    <p>
      podstawowe: map, filter, reduce
    </p>
    <input #input type="text" id="textInput" class="form-control" placeholder="Enter Query..." autocomplete="false">
    <pre>{{text}}</pre>
    <button #btn class="btn btn-primary">Button</button>
    <app-list #list></app-list>
  `,
  styles: []
})
export class PipeComponent implements OnInit {

  @ViewChild('input')
  input: ElementRef;
  @ViewChild('btn')
  btn: ElementRef;
  @ViewChild('list')
  list: ListComponent;
  text: string;

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;
    const input = this.input.nativeElement;


    const interval$ = interval(1000);
    const btn$: Observable<MouseEvent> = fromEvent(button, 'click');
    const input$ = fromEvent<any>(input, 'keyup');

    // const ajax$ = ajax('/api/404-error');

    // ajax$.pipe(
    //   switchMap(res => ajax$.pipe(retry(2))),
    //   retry(3)
    // ).subscribe(
    //   v => log('V', v),
    //   err => log('ERR', err)
    // );

    const keyboard$ = input$.pipe(
      map<any, string>(e => e.target.value),
      // distinctUntilChanged(),
      myDistinctUntilChanged(),
      // filter(v => v.length > 2),
      myFilter<string>(v => v.length > 2),
      // debounce(() => interval$),
      debounceTime(250),
      // bufferTime(2000)
      // buffer(interval$)
    );

    const s = keyboard$.subscribe(v => log('V', v));

  }

}

function myDistinctUntilChanged() {
  return function(in$): Observable<any> {
    return Observable.create(obs => {

      let value;

      const sub = in$.subscribe(v => {
        if (value !== v) {
          obs.next(v);
        }
        value = v;
      });

      return () => {
        sub.unsubscribe();
      };
    });
  };
}

function myFilter<T>(compare) {

  return function(in$: Observable<T>) {

    return Observable.create(obs => {

      const sub: Subscription = in$.subscribe(
        v => {
          if (compare(v)) {
            obs.next(v);
          }
        },
        err => obs.error(err),
        () => obs.complete()
      );

      return () => {
        sub.unsubscribe();
      };
    });
  };
}

/**

    const btn$: Observable<MouseEvent> = fromEvent(button, 'click');
    const input$ = fromEvent<any>(input, 'keyup'); // TODO e.target.value

    const interval$ = interval(1000);

    function myOperator(in$) {
      // return in$.pipe(

      // );
      const subj$ = new Subject();

      in$.subscribe(v => {
        subj$.next(v + 1);
      });

      return subj$.asObservable();
    }

    const keyboard$ = input$.pipe(
      map(e => e.target.value),
      distinctUntilChanged(),
      // filter(v => v.length > 2),
      // debounce(() => interval$),
      // debounceTime(250),
      // bufferTime(2000)
      myOperator,
      buffer(interval$)
    );

    keyboard$.subscribe(v => log('V', v));

 */
