import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { setLocations } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUrl = '';

  constructor (
    private router: Router,
    private http: HttpClient,
    private store: Store
    ) {
      this.http.get('assets/locations_2.json').subscribe((locations: any) => {
        locations.forEach((item: any) => {
          item.coordinates = {
            lat: item.coordinates[0],
            lng: item.coordinates[1]
          }
        });
        this.store.dispatch(setLocations({ locations }));
      })
    }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if(event instanceof NavigationStart) {
        this.currentUrl = event.url;
      }
    });
  }
}
