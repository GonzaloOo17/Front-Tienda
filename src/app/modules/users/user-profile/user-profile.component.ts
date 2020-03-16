import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user';
import { Profile } from 'src/app/models/profile';
import { TiendasService } from 'src/app/services/tiendas.service';
import { Tienda } from 'src/app/models/tienda';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id:string='';

  user: Profile = new Profile();

  tienda: Tienda = new Tienda();

  constructor(private _route: ActivatedRoute,
              private _auth: AuthService,
              private _tService: TiendasService) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.params.id;

    this._auth.getProfile(this.id)
      .subscribe((data:any)=>{
        console.log(data);
        this.user = data;
      })

      this._tService.getTiendaUser(this.id)
        .subscribe((data:any)=>{
          this.tienda = data;
          console.log(data)
        })

  }

}
