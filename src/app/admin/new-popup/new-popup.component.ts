import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-popup',
  templateUrl: './new-popup.component.html',
  styleUrls: ['./new-popup.component.scss']
})
export class NewPopupComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.activeModal.close();
  }
}
