import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  Observable,
  fromEvent,
  combineLatest,
  BehaviorSubject,
  interval,
  of,
  EMPTY
} from 'rxjs';
import {
  startWith,
  map,
  share,
  switchMap,
  catchError,
  takeUntil
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { ListComponent } from '../../shared/list/list.component';

@Component({
  selector: 'app-operators',
  template: `
    <h1>Operatory</h1>
    <p>
      zaawansowane: switchMap, debounceTime throttleTime combineLatest retry
      merge delay bufferTime switchMap takeUntil
    </p>
    <input
      #input
      type="text"
      id="textInput"
      class="form-control"
      placeholder="Enter Query..."
      autocomplete="false"
    />
    <pre>{{ text }}</pre>
    <button #btn class="btn btn-primary">Button</button>

    <pre>{{ data$ | async | json }}</pre>

    <app-list #list></app-list>
  `,
  styles: []
})
export class OperatorsComponent implements OnInit {
  @ViewChild('input')
  input: ElementRef;
  @ViewChild('btn')
  btn: ElementRef;
  @ViewChild('list')
  list: ListComponent;
  text: string;

  data$: Observable<any>;

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;
    const input = this.input.nativeElement;

    const btn$: Observable<MouseEvent> = fromEvent(button, 'click');
    const input$: Observable<MouseEvent> = fromEvent(input, 'keyup');

    const interval$ = interval(1000);

    this.data$ = ajax('/api/long').pipe(
      map(res => res.response),
      startWith({ id: 2, name: 'guest' }),
      takeUntil(btn$)
    );

    // const sharedInterval$ = interval$.pipe(
    //   takeUntil(btn$),
    //   share()
    // );

    // sharedInterval$.subscribe(v => log('A', v));

    // setTimeout(() => {
    //   sharedInterval$.subscribe(v => log('B', v));
    // }, 4000);

    // setTimeout(() => {
    //   interval$.pipe(takeUntil(btn$)).subscribe(v => log('Z', v));
    // }, 5000);

    // const id$ = of(1);

    // function getUser(id): Observable<any> {
    //   return ajax({url: '/api/user?id=' + id, }).pipe(
    //     map(res => res.response),
    //     catchError(err => EMPTY)
    //   );
    // }

    // function getCategory(id): Observable<any> {
    //   return ajax({url: '/api/category/' + id, }).pipe(
    //     map(res => res.response)
    //   );
    // }

    // function getUserWithCategory(id): Observable<any> {
    //   return of(id).pipe(
    //     switchMap(id2 => getUser(id2)),
    //     switchMap(user => getCategory(user.category).pipe(map(category => [user, map]))),
    //     catchError(err => EMPTY)
    //   );
    // }

    // const data$ = id$.pipe(
    //   switchMap(id => getUserWithCategory(id).pipe(
    //     catchError(err => {
    //       // TODO UI dla errorow
    //       return EMPTY;
    //     })
    //   ))
    // );

    // data$.subscribe(
    //   data => log('DATA', data),
    //   err => log('ERR', err)
    // );

    // const config$ = new BehaviorSubject('config');
  }
}
