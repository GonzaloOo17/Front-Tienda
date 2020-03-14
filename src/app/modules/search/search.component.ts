import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendasService } from 'src/app/services/tiendas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string = '';

  tiendas: any[] = [];

  constructor(private route: ActivatedRoute,
    private tservice: TiendasService) {
    this.keyword = this.route.snapshot.params['keyword'];
    console.log(this.keyword)
    this.tservice.searchTiendas(this.keyword)
      .subscribe((data: any) => {
        this.tiendas = data;
      })
  }

  ngOnInit(): void {
  }

}
