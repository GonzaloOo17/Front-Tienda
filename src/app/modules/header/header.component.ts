import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from 'src/app/modals/custom-modal/custom-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalConfirm: NgbModalRef;

  constructor(private _modal: NgbModal) { }

  ngOnInit() {
  }

  logIn(){
    this.modalConfirm = this._modal.open(CustomModalComponent);
		this.modalConfirm.componentInstance.messageTitle =
			"¿Are you sure you want to delete this item?";
		this.modalConfirm.componentInstance.messageDescription =
			"This action cannot be ";
		this.modalConfirm.result.then((result) => {
			if (result === true) {
        //lo que quieres que haga cuando se cierre
        
			} else {
			}
		});
  }

}
