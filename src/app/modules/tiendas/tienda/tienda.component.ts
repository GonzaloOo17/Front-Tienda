import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  idTienda: string = '';

  tienda: any;

  constructor(private _route: ActivatedRoute,
              private _tService: TiendasService) { }

  ngOnInit(){

    this.idTienda=this._route.snapshot.params.id;
    this._tService.getTienda(this.idTienda)
      .subscribe((data:any)=>{
        console.log(data);
        this.tienda=data;
      })

  }

}
