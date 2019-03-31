import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable, defer } from 'rxjs';
import { UpCounters, DownCounters } from '../../actions/counter.actions';

@Component({
  selector: 'project-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public amount$: Observable<number>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.amount$ = this.store.select('counter', 'amount');
  }

  onDownClick(event) {
    this.store.dispatch(new DownCounters());
  }

  onUpClick(event) {
    this.store.dispatch(new UpCounters());
  }
}
