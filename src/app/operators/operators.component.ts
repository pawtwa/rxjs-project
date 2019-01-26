import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Observable, fromEvent } from 'rxjs';

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


  }

}
