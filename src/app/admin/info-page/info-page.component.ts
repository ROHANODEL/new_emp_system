import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { takeLast } from 'rxjs';
import { NewServiceService } from 'src/app/service/new-service.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  constructor(
    private service : NewServiceService
  ) { }
  aaa:any
  ngOnInit(): void {
    this.service.incoming.subscribe((e:any)=>{
      console.log('============>',e)
      this.aaa = e;
      // this.setData(e);
    })

  }
  // setData(e:any): void {
  //   console.log('wwwwwwwwww',e)
  // }





}
