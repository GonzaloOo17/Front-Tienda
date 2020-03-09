import { Component, OnInit } from '@angular/core';
import { TiendasService } from 'src/app/services/tiendas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-tiendas',
  templateUrl: './list-tiendas.component.html',
  styleUrls: ['./list-tiendas.component.css']
})
export class ListTiendasComponent implements OnInit {

  tiendas: any[]= [];

  keyword: any='';

  constructor(private tservice: TiendasService,
              private route: ActivatedRoute) { 

    
                this.tservice.listTiendas()
                .subscribe((data:any)=>{
                  this.tiendas=data;
                })

  }

  

  ngOnInit() {
  }

}
