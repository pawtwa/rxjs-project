import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-pipe',
  template: `
    <h1>
      Metoda pipe() na Observable
    </h1>
    <h2>operatory</h2>
    <p>
      podstawowe: map, filter, reduce
    </p>
    <input #input type="text" id="textInput" class="form-control" placeholder="Enter Query..." autocomplete="false">
    <pre>{{text}}</pre>
    <button #btn class="btn btn-primary">Button</button>
    <app-list #list></app-list>
  `,
  styles: []
})
export class PipeComponent implements OnInit {

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