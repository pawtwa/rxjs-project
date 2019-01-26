import { Component, OnInit } from '@angular/core';

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
  `,
  styles: []
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
