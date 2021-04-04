import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { noop, Observable } from 'rxjs';
import { Resturant } from '../models/resturant.model';
import { ResturantServicesService } from '../services/resturant-services.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  resturant$: Observable<Resturant>;

  constructor(
    private resturantServicesService: ResturantServicesService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const productId: number = JSON.parse(this.activatedRoute.snapshot.params.id)
    // console.log(this.activatedRoute.snapshot)
    this.resturant$ = this.resturantServicesService.getResturantById(productId);
  }

}
