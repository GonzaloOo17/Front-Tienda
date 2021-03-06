import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from 'src/app/modals/custom-modal/custom-modal.component';
import { TiendasService } from 'src/app/services/tiendas.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalConfirm: NgbModalRef;
  keyword: string;

  user: UserModel = new UserModel();
  login: string = "false";
  idUser: string = '';

  categorias: any[]= [];

  constructor(private _modal: NgbModal,
              private tservice: TiendasService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.idUser=localStorage.getItem("id_user");
    this.login = localStorage.getItem("login");

    this.tservice.listCategorias()
      .subscribe((data:any)=>{
        console.log(data)
        this.categorias=data;
      })
  }

  search(){

    this.router.navigateByUrl(`search/${this.keyword}`)
    console.log(this.keyword)
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
        this.login = "true";
        this.idUser=localStorage.getItem("id_user");
        this.ngOnInit();
			} else {
			}
		});
  }

  logOut(){
    localStorage.removeItem("id_user");
    localStorage.removeItem("login");
    this.ngOnInit();
    this.router.navigateByUrl('');
    
  }

}
