import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, of, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  delay,
  share,
  mergeMap,
  exhaustMap
} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  template: `
    <h1>Autocomplete</h1>
    <form role="form">
      <div class="form-group">
        <label for="textInput">Enter Query for Wikipedia</label>
        <input
          #input
          type="text"
          id="textInput"
          class="form-control"
          placeholder="Enter Query..."
        />
      </div>
    </form>

    <h2>
      Wyniki <small>({{ items.length }})</small>
    </h2>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let item of items; let i = index">
        {{ item.title }}
      </li>
    </ul>
  `,
  styles: []
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('input')
  input: ElementRef;

  items = [];
  constructor() {}

  ngOnInit() {
    const input = this.input.nativeElement;

    const keyup$ = fromEvent(input, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter(text => text.length > 2),
      distinctUntilChanged(),
      debounceTime(250),
      switchMap(text => searchWikipedia(text))
      // mergeMap(text => searchWikipedia(text))
      // exhaustMap(text => searchWikipedia(text))
    );

    keyup$.subscribe((data: any) => {
      console.log('data', data);
      this.items = data;
    });
  }
}

function searchWikipedia(term) {
  return ajax.getJSON('/api/wikipedia?search=' + term).pipe(
    map(response => response),
    catchError(err => {
      return of([{ title: 'error: ' + err.message }]);
    })
  );
}

/**
 *
    function searchWikipedia(term) {
      return ajax.getJSON('/api/wikipedia?search=' + term).pipe(
        map(response => response),
        catchError(err => {
          return of([{title: 'error: ' + err.message}]);
        })
      );
    }

    const input = this.input.nativeElement;

    const keyup$ = fromEvent(input, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter((text) =>  text.length > 2),
      distinctUntilChanged(),
      debounceTime(250),
      switchMap(text => searchWikipedia(text))
    );

    keyup$.subscribe((data: any) => {
      console.log('data', data);
      this.items = data;
    });

 */

/**

   function searchWikipedia(term): Observable<any[]> {
     return ajax.getJSON('/api/wikipedia?limit=5&search=' + term).pipe(
       map(response => response as any[]),
       catchError(err => of([{title: 'error: ' + err.message}]))
     );
   }

   const input = this.input.nativeElement;

   const keyup$ = fromEvent(input, 'keyup').pipe(
     map((e: any) => e.target.value),
     filter((text) =>  text.length > 2),
     distinctUntilChanged(),
     debounceTime(250),
     switchMap(text => searchWikipedia(text)),
     map(results => results.filter((k, i) => i < 5 )),
     share()
   );

   keyup$.subscribe((data: any) => {
     console.log('data A', data);
     this.items = data;
   });
   // keyup$.subscribe((data: any) => {
   //   console.log('data B', data);
   //   this.items = data;
   // });

 */
