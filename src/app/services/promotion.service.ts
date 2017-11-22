import { Injectable } from '@angular/core';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';


import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular,private http: Http, private processHTTPMsgService : ProcessHTTPMsgService) { }


  getPromotions(): Observable<Promotion[]>{
    return this.restangular.all('promotions').getList();
  }

  
  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions/', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
    .map(promotion => promotion[0]);
  }



}
