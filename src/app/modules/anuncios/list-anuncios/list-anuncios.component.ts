import { Component, OnInit } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-list-anuncios',
  templateUrl: './list-anuncios.component.html',
  styleUrls: ['./list-anuncios.component.css']
})
export class ListAnunciosComponent implements OnInit {

  anuncios: any[]= [];

  constructor(private tservice: TiendasService) {

    this.tservice.listAnuncios()
      .subscribe((data:any)=>{
        this.anuncios = data;
      })
   }

  ngOnInit() {
  }

}
