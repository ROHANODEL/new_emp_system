import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewServiceService } from 'src/app/service/new-service.service';
import { NewPopupComponent } from '../new-popup/new-popup.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private router : Router,
    private service : NewServiceService,
    private modal: NgbModal
  ) {}

  myName:string="shweta";
  ngOnInit(): void {}

  tabledata = [
    {
      id: '1',
      name: 'Rohan Odel',
      role: 'web Developer',
      join_date: '1/3/2022',
      experience: '1 year',
      salary: '15,000',
      gender: 'male',
      phone_number: '8625864927',
      address: 'anjali nagar, katraj pune - 46',
    },
    {
      id: '2',
      name: 'king kong',
      role: 'web Developer',
      join_date: '1/3/2022',
      experience: '1 year',
      salary: '15,000',
      gender: 'male',
      phone_number: '7767034533',
      address: 'kauli , Soegaon ,Aurangabad - 431120',
    },
    {
      id: '3',
      name: 'cool cute',
      role: 'web Developer',
      join_date: '1/3/2022',
      experience: '6 month',
      salary: '15,000',
      gender: 'male',
      phone_number: '7588509301',
      address: 'BSNL road prabhadevi dadar west , mumbai - 400028',
    },
  ];

  // infoData={}
  handleInfo(newdata:any) {
    // this.infoData = newdata
    this.service.incomingData(newdata)
    this.router.navigate(['/info'])
  }

  updateHandle(){
    this.router.navigate(['/update'])
  }


  addHandler(){
    this.router.navigate(['/addemp'])
  }

  handleDelete(): void {
    this.modal.open(NewPopupComponent, {size: 'xl'});
  }
}
