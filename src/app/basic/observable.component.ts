import { Component, OnInit, ViewChild, ViewRef, ElementRef } from '@angular/core';
import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { ListComponent } from '../list/list.component';

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
