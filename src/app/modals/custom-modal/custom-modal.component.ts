import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @Input() messageTitle;
  @Input() messageDescription;

  email: any = '';
  password: any = '';

  constructor(public _activeModal: NgbActiveModal,
              private auth: AuthService) { }

  ngOnInit() {
  }

  accept(){
    this.auth.logIn()
      .subscribe(data=>{

      });
    
    this._activeModal.close(true);
  }

  decline(){
    this._activeModal.close(false);
  }

}
