import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectWikiQuery, selectWikiResults, selectWikiLoading } from '../../reducers';
import { Observable } from 'rxjs';
import { WikiResult } from '../../reducers/wiki.reducer';
import { QueryWikis } from '../../actions/wiki.actions';

@Component({
  selector: 'project-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {

  public query$: Observable<string> = this.store.select(selectWikiQuery);
  public results$: Observable<WikiResult[]> = this.store.select(selectWikiResults);
  public loading$: Observable<boolean> = this.store.select(selectWikiLoading);

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  onChangeQuery(event) {
    this.store.dispatch(new QueryWikis({ query: event.target.value }));
  }
}
