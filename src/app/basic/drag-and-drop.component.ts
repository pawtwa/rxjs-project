import { Component, OnInit, ViewChild, ViewRef, ElementRef } from '@angular/core';
import { fromEvent, Observable, Observer, Subscription } from 'rxjs';
import { mergeMap, takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  template: `
    <h1>Drag & Drop</h1>
    <div class="host">
      <div #box></div>
    </div>
  `,
  styles: [`
    .host {height: 200px; width: 100%; border: 1px solid gray; position: relative;}
    .host > div {background-color: black; width: 50px; height: 50px; position: absolute; top: 0; left: 0;}
  `]
})
export class DragAndDropComponent implements OnInit {

  @ViewChild('box')
  box: ElementRef;

  ngOnInit() {


  }

}
/**

    const box = this.box.nativeElement;

    const move$ = fromEvent(document, 'mousemove');
    const down$ = fromEvent(document, 'mousedown');
    const up$ = fromEvent(document, 'mouseup');

    const drag$ = down$.pipe(
      mergeMap((downEvent) => {
        return move$.pipe(takeUntil(up$));
      })
    );

    drag$.subscribe((pos) => console.log(pos)));

 */
/**

    const box = this.box.nativeElement;

    const down$ = fromEvent<MouseEvent>(box, 'mousedown');
    const move$ = fromEvent<MouseEvent>(document, 'mousemove');
    const up$ = fromEvent<MouseEvent>(document, 'mouseup');

    const drag$ = down$.pipe(
      mergeMap((downEvent) => {

        // miejsce kliknięcia na stronie
        const startX = downEvent.pageX;
        const startY = downEvent.pageY;

        // obecna pozycja boxa
        const boxX = parseInt(box.style.left, 10) || 0;
        const boxY = parseInt(box.style.top, 10) || 0;

        return move$.pipe(
          map( function( moveEvent ) {
            return {
              x: boxX + moveEvent.pageX - startX,
              y: boxY + moveEvent.pageY - startY
            };
          }),
          takeUntil(up$)
        );
      })
    );

    drag$.subscribe((pos) => {
      box.style.top = pos.y + 'px';
      box.style.left = pos.x + 'px';
    });

 */
