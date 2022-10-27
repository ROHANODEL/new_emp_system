import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }

  // incoming = new Subject<any>();

  incoming = new BehaviorSubject<any>('');
  incomingData(data:any):void{
    this.incoming.next(data)
  }

  gardvalidation = new BehaviorSubject<any>('');
  newgardvalidation(vals:any):void{
    this.gardvalidation.next(vals)
  }
  




}
