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

  user={
    email:'',
    password:'',
  }
  id: string= '';

  constructor(public _activeModal: NgbActiveModal,
              private auth: AuthService) { }

  ngOnInit() {
  }

  accept(){
    this.auth.logInPost(this.user)
      .subscribe((data: any)=>{
        this.id = data;
        console.log(data);
        if (this.id != ''){
          localStorage.setItem("login", 'true');
          localStorage.setItem("id_user", this.id);
          console.log("id cambiado")
          this._activeModal.close(false);
        } else {
          alert("Credenciales incorrectos")
        }
      });
      
    
      //this._activeModal.close(true);
  }

  decline(){
    this._activeModal.close(false);
  }

}
