import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor() { }

  incoming = new Subject<any>();
  incomingData(data:any):void{
    this.incoming.next(data)
  }


}
