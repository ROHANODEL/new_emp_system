import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private formbulder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.login = this.formbulder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address:['',Validators.required],
      mobile:['',Validators.required],
      emailId:['',Validators.required],
      company:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required],
      confirm:['',Validators.required]
    })
  }

  login! : FormGroup;

  get newfirstName(): any {return this.login.get('firstName')}
  get newlastName(): any {return this.login.get('lastName')}
  get newaddress(): any {return this.login.get('address')}
  get newmobile(): any {return this.login.get('mobile')}
  get newemailId(): any {return this.login.get('emailId')}
  get newcompany(): any {return this.login.get('company')}
  get newusername(): any {return this.login.get('username')}
  get newpassword(): any { return this.login.get('password')}
  get newconfirm(): any {return this.login.get('confirm')}

  clickHandler(val:any){
    this.login.markAllAsTouched()
    console.log(val.value)
  }

}
