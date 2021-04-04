import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, fromEvent, Observable } from 'rxjs';
import { Images, Resturant } from '../models/resturant.model';
import { ResturantServicesService } from '../services/resturant-services.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allResturants$: Observable<Resturant[]>;
  allNoodlesImages$: Observable<Images[]>;
  resturants$: Observable<any[]>;
  @ViewChild('simpleSearchInput') simpleSearchInput: ElementRef;
  searchText='';

  constructor(
    private resturantServicesService: ResturantServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.allResturants$ = this.resturantServicesService.getAllResturants();

    this.allNoodlesImages$ = this.resturantServicesService.getAllNoodlesImages();

  }

  openResturant(resturant: Resturant) {
    // console.log("-------------", resturant);
    this.router.navigate(['/resturant', resturant.Id]);
  }

}
