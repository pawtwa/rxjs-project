import { Component, OnInit, ViewChild, ViewRef, ElementRef } from '@angular/core';

import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { ListComponent } from '../../shared/list/list.component';

@Component({
  selector: 'app-observable',
  template: `
    <h1>Observable</h1>
    <button #btn class="btn btn-primary">Button</button>
    <app-list #list></app-list>
  `,
  styles: []
})
export class ObservableComponent implements OnInit {

  @ViewChild('btn')
  btn: ElementRef;

  @ViewChild('list')
  list: ListComponent;

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;


    // const btn$: Observable<MouseEvent> = fromEvent(button, 'click');


    /**
     * PRODUCER
     */
    const btn$ = Observable.create((obs) => {

      obs.next('custom value 1');
      // obs.error('custom error');
      obs.complete();
      obs.next('custom value 2');

      function onClick(e) {
        obs.next(e);
      }

      button.addEventListener('click', onClick);

      return () => {
        log('koniec pracy');
        button.removeEventListener('click', onClick);
      };

    });

    /**
     * CONSUMER
     */
    const observer: Observer<MouseEvent> = {
      next: (val) => this.list.add('next', val),
      error: (err) => this.list.add('error', err),
      complete: () => this.list.add('complete'),
    };

    const subscription: Subscription = btn$.subscribe(observer);
    const subscription2: Subscription = btn$.subscribe(observer);


    setTimeout(() => {
      log('unsubscribe');
      subscription.unsubscribe();
    }, 2000);


    // const sbuscription2 = btn$.subscribe(
    //   (val) => this.list.add('next', val),
    //   (err) => this.list.add('error', err),
    //   () => this.list.add('complete')
    // );

  }

}
/**

    // const btn$: Observable<MouseEvent> = fromEvent(button, 'click');

    const btn$ = Observable.create((obs) => {
      obs.next('custom value 1');
      // obs.error('custom error');
      // obs.complete();
      obs.next('custom value 2');

      button.addEventListener('click', (e) => {
        obs.next(e);
      });
    });

    const observer: Observer<MouseEvent> = {
      next: (val) => this.list.add('next', val),
      error: (err) => this.list.add('error', err),
      complete: () => this.list.add('complete'),
    };

    const subscription: Subscription = btn$.subscribe(observer);

    setTimeout(() => {
      log('unsubscribe');
      subscription.unsubscribe();
    }, 5000);

    // const sbuscription2 = btn$.subscribe(
    //   (val) => this.list.add('next', val),
    //   (err) => this.list.add('error', err),
    //   () => this.list.add('complete')
    // );

 */

 /**

    // const btn$: Observable<MouseEvent> = fromEvent(button, 'click');

    const btn$ = Observable.create((obs) => {
      let counter = 0;
      function onClick(e) {
        if (counter > 3) {
          return obs.complete('nie nie nie ');
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


    const observer: Observer<MouseEvent> = {
      next: (val) => this.list.add('next', val),
      error: (err) => this.list.add('error', err),
      complete: () => this.list.add('complete'),
    };

    const subscription = btn$.subscribe(observer);

    setTimeout(() => {
      log('timeout unsubscribe');
      subscription.unsubscribe();
    }, 3000);

  */
