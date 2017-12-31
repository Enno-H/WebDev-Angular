import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { resolve } from 'url';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]>{
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader>{
    return this.restangular.one('leaders',id).get();
  }

  getFeaturedLeader(): Observable<Leader>{
    return this.restangular.all('leaders').getList({featured: true})
    .map(leaders => leaders[0]);  }

}
