import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from 'src/app/shared/list/list.component';

import { Observable, fromEvent, interval, Subject } from 'rxjs';
import { map, distinctUntilChanged, debounceTime, debounce, groupBy, filter, bufferTime, buffer } from 'rxjs/operators';

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



  }

}
