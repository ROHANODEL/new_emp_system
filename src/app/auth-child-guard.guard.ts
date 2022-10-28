import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewServiceService } from './service/new-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthChildGuardGuard implements CanActivate, OnInit {
  ngOnInit(): void {
  }
  
  dataChange:any = false
constructor(
  private service : NewServiceService,
  private route : Router
  ){}

  // aaa(){
  //   this.service.incoming.subscribe((e:any)=>{
  //     this.dataChange = e
  //   })
  //   return this.dataChange
  // }

  
  aaa(){
    this.service.gardvalidation.subscribe((e:any)=>{
      this.abc = e
    })
  }

  abc = false

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   console.log(this.dataChange)
    // return this.aaa();
   this.aaa()
   console.log('===========>',this.abc)
  
    if(this.abc) {
      return this.abc
     }else{ 
      this.route.navigate(['/login'])
      return false;
     }
  }

  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canDeactivate(
  //   component: unknown,
  //   currentRoute: ActivatedRouteSnapshot,
  //   currentState: RouterStateSnapshot,
  //   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

}
