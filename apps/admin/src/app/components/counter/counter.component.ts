import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs';
import { UpCounters, DownCounters, StepCounters } from '../../actions/counter.actions';

@Component({
  selector: 'project-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {

  public amount$: Observable<number> = this.store.select('counter', 'amount');
  public step$: Observable<number> = this.store.select('counter', 'step');
  public saving$: Observable<boolean> = this.store.select('counter', 'saving');

  constructor(private store: Store<State>) { }

  ngOnInit() {
    //this.amount$ = this.store.select('counter', 'amount');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  onDownClick(event) {
    this.store.dispatch(new DownCounters());
  }

  onUpClick(event) {
    this.store.dispatch(new UpCounters());
  }

  onChangeStep(event: Event) {
    this.store.dispatch(new StepCounters({ step: +(<HTMLInputElement>event.target).value }));
  }
}
