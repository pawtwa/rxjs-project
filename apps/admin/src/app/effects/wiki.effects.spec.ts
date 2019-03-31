import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WikiEffects } from './wiki.effects';

describe('WikiEffects', () => {
  let actions$: Observable<any>;
  let effects: WikiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WikiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(WikiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
