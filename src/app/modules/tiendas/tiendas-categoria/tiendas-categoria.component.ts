import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/models/tienda';
import { ActivatedRoute } from '@angular/router';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-tiendas-categoria',
  templateUrl: './tiendas-categoria.component.html',
  styleUrls: ['./tiendas-categoria.component.css']
})
export class TiendasCategoriaComponent implements OnInit {

  idCat: string = '';

  tiendas: Tienda[]= [];
  constructor(private _tService: TiendasService,
              private route: ActivatedRoute) {

    this.idCat= this.route.snapshot.params.id;
   }

  ngOnInit(): void {

    this._tService.getTiendasCategoria(this.idCat)
      .subscribe((data:any)=>{
        console.log(data);
        this.tiendas = data;
      })
  }

}
