import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from 'src/app/shared/list/list.component';
import { Observable, fromEvent, combineLatest, BehaviorSubject, interval, of, EMPTY } from 'rxjs';
import { startWith, map, share, switchMap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-operators',
  template: `
  <h1>
  Operatory
    </h1>
    <p>
      zaawansowane: switchMap, debounceTime throttleTime combineLatest retry merge delay bufferTime switchMap takeUntil
    </p>
    <input #input type="text" id="textInput" class="form-control" placeholder="Enter Query..." autocomplete="false">
    <pre>{{text}}</pre>
    <button #btn class="btn btn-primary">Button</button>
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

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;
    const input = this.input.nativeElement;

    const btn$: Observable<MouseEvent> = fromEvent(button, 'click');
    const input$: Observable<MouseEvent> = fromEvent(input, 'keyup');

    const id$ = of(1);

    function getUser(id): Observable<any> {
      return ajax({url: '/api/user?id=' + id, }).pipe(
        map(res => res.response),
        catchError(err => EMPTY)
      );
    }

    function getCategory(id): Observable<any> {
      return ajax({url: '/api/category/' + id, }).pipe(
        map(res => res.response)
      );
    }

    function getUserWithCategory(id): Observable<any> {
      return of(id).pipe(
        switchMap(id2 => getUser(id2)),
        switchMap(user => getCategory(user.category).pipe(map(category => [user, map]))),
        catchError(err => EMPTY)
      );
    }

    const data$ = id$.pipe(
      switchMap(id => getUserWithCategory(id).pipe(
        catchError(err => {
          // TODO UI dla errorow
          return EMPTY;
        })
      ))
    );

    data$.subscribe(
      data => log('DATA', data),
      err => log('ERR', err)
    );


    // const config$ = new BehaviorSubject('config');
  }

}

/**

    // const stream$ = combineLatest(
    //   config$,
    //   btn$.pipe(startWith(1)),
    //   input$.pipe(
    //     map((e: any) => e.target.value),
    //     startWith('start')
    //     )
    // ).pipe(
    //   map(([c, b, i]) => {
    //     return '';
    //   })
    // );


    // stream$.subscribe(v => log(v));

    const interval$ = interval(1000);

    const sharedInterval$ = interval$.pipe(
      share()
    );

    sharedInterval$.subscribe(v => log('A', v));

    setTimeout(() => {
      sharedInterval$.subscribe(v => log('B', v));
    }, 4000);

    setTimeout(() => {

    interval$.subscribe(v => log('Z', v));
    }, 5000);


 */
