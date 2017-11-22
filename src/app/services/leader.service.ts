
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular,private http: Http, private processHTTPMsgService : ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]>{
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders/', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
    .map( leader => leader[0]);
  }

}
