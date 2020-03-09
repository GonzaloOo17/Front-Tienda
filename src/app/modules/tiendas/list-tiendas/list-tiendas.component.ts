import { Component, OnInit } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-list-tiendas',
  templateUrl: './list-tiendas.component.html',
  styleUrls: ['./list-tiendas.component.css']
})
export class ListTiendasComponent implements OnInit {

  tiendas: any[]= [];

  constructor(private tservice: TiendasService) { 
    this.tservice.listTiendas()
      .subscribe((data:any)=>{
        this.tiendas=data;
      })

  }

  ngOnInit() {
  }

}
