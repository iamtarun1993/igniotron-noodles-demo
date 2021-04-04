import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Images, Resturant } from '../models/resturant.model';

@Injectable({
  providedIn: 'root'
})
export class ResturantServicesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllResturantDetails(): Observable<any[]> {
    return this.httpClient.get<any>('api/he-public-data/TopRamen8d30951.json');
  }

  getAllResturants(): Observable<Resturant[]> {
    return forkJoin({
      resturants: this.getAllResturantDetails(),
      images: this.getAllNoodlesImages()
    }).pipe(
      map(({resturants, images}) => {
        let index = 0;
        resturants = resturants.map(resturant => {
          resturant.Id = index;
          resturant.Image = images[index%images.length].Image;
          index++;
          return resturant as Resturant;
        })
        return resturants as Resturant[];
      })
    )
  }

  getResturantById(id: number): Observable<Resturant> {
    return this.getAllResturants().pipe(
      map(resturants => {
        const resturant = resturants.filter(resturant => {
          if (resturant.Id === id) {
            return resturant;
          }
        });
        return resturant;
      }),
      map(res => res[0])
    )
  }

  getAllNoodlesImages(): Observable<Images[]> {
    return this.httpClient.get<any>('api/he-public-data/noodlesec253ad.json');
  }
}
