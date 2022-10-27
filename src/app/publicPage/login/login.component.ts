import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewServiceService } from 'src/app/service/new-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router,
    private service : NewServiceService
   ) { }

  ngOnInit(): void {
  }

  inputEmail:any
  inputPassword:any
  changedata = false
  
  clickHandler() {
    if(this.inputEmail==='rohanodel1997@gmail.com' && this.inputPassword==='12345'){
      this.changedata = true
      // this.service.incomingData(true)
      this.service.newgardvalidation(true)
      this.router.navigate(['/admin'])
    }
  }

  signHandler(){
    this.router.navigate(['/signup'])
  }

}
