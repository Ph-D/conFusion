import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProcessHTTPMsgService {

  constructor() { }

  public extracData(res: Response){
    let body = res.json();

    return body || { };
  }

}
