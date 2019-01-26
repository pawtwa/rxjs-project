import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  template: `
    <h1>
      Subjects
    </h1>
    <p>
      Subject
      BehaviorSubject
      ReplaySubject
    </p>
    <button #btn class="btn btn-primary">Button</button>

    <hr>
    <button (click)="showList = !showList" class="btn btn-primary">toggle debug</button>
    <pre *ngIf="showList"> {{list$ | async | json}} </pre>
    <hr>
    <app-list #list></app-list>
  `,
  styles: []
})
export class SubjectComponent implements OnInit {

  showList = true;

  @ViewChild('btn')
  btn: ElementRef;

  @ViewChild('list')
  list: ListComponent;

  list$: Observable<any>;

  ngOnInit() {
    const log = (...args) => this.list.add(...args);
    const button = this.btn.nativeElement;

    const subject = new Subject();

    let counter = 0;
    button.addEventListener('click', () => {
      counter++;
      log('counter', counter);
      subject.next(counter);
    });

    this.list$ = subject.asObservable();

  }

}
