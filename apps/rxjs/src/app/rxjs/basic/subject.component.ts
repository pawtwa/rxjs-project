import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  BehaviorSubject,
  ReplaySubject
} from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
import { ListComponent } from '../../shared/list/list.component';

@Component({
  selector: 'app-subject',
  template: `
    <h1>Subjects</h1>
    <p>Subject BehaviorSubject ReplaySubject</p>
    <button #btn class="btn btn-primary">Button</button>

    <hr />
    <button (click)="showList = !showList" class="btn btn-primary">
      toggle debug
    </button>
    <p>
      <b *ngIf="showList"> {{ list$ | async | json }} </b>
    </p>

    <hr />
    <app-list #list></app-list>
  `,
  styles: []
})
export class SubjectComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  subscription: Subscription;

  showList = true;

  @ViewChild('btn')
  btn: ElementRef;

  @ViewChild('list')
  listComp: ListComponent;

  list$: Observable<any>;
  list: any;

  ngOnInit() {
    const log = (...args) => this.listComp.add(...args);
    const button = this.btn.nativeElement;

    // const subject$ = new Subject();
    // const subject$ = new BehaviorSubject(-1);
    const subject$ = new ReplaySubject(2);

    // log(subject$.getValue());

    let counter = 0;

    button.addEventListener('click', () => {
      counter++;
      log('counter', counter);
      subject$.next(counter);
    });

    this.list$ = subject$.asObservable().pipe(
      tap(value => log('tap', value))
      // takeUntil(this.destroy$)
    );

    setTimeout(() => {
      this.list$.subscribe(v => log('V2 @@', v));
    }, 2000);

    // this.list$.subscribe(val => this.list = val);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

/**
export class SubjectComponent implements OnInit, OnDestroy {

  // @OnDestroy();
  destroy$: Subject<void> = new Subject();

  subscription: Subscription;

  showList = true;

  @ViewChild('btn')
  btn: ElementRef;

  @ViewChild('list')
  list: ListComponent;

  list$: Observable<any>;
  lista: any;

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;

    // const subject$ = new Subject();
    // const subject$ = new BehaviorSubject(-1);
    const subject$ = new ReplaySubject(2);

    let counter = 0;
    button.addEventListener('click', () => {
      counter++;
      log('counter', counter);
      subject$.next(counter);
    });

    this.list$ = subject$.asObservable().pipe(
      tap(value => log('tap', value)),
      takeUntil(this.destroy$.asObservable())
    );

    // this.list$.subscribe(val => this.lista = val);

  }

  ngOnDestroy(): void {
    // NIE
    // if(this.subscription) {
    //   this.subscription.unsubscribe();
    // }

    // TAK
    this.destroy$.next();
  }

}
 */