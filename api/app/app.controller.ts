import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { from, of, throwError } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/wikipedia')
  wiki(@Query('search') search: string) {
    if (search.length > 14) {
      return throwError({title: 'fake error for ' + search});
    }
    return of([
      {title: 'Fount title 1 for ' + search},
      {title: 'Fount title 2 for ' + search},
      {title: 'Fount title 3 for ' + search}
    ]);
  }

  @Get('api')
  getData(@Query() name): string {
    return ;
  }

  @Get('api/parse')
  parse() {
    return {
      action: 'create'
    };
  }

  @Get('api/create')
  create() {
    return of({
      message: 'record created'
    }).pipe();
  }
}

/**
  @Get('api/wikipedia')
  wiki(@Query('search') search: string) {
    if (search.length > 4) {
      return throwError({title: 'fake error for ' + search});
    }
    return of([
      {title: 'Fount title 1 for ' + search},
      {title: 'Fount title 2 for ' + search},
      {title: 'Fount title 3 for ' + search}
    ]);
  }


 */
