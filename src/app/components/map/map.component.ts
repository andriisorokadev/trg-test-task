import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Store } from '@ngrx/store';
import { getLocations } from 'src/app/store/app.selectors';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('container') container!:ElementRef;  
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow

  mapWidth = '';
  zoom = 7;
  center!: google.maps.LatLngLiteral;
  selectedLocation: any;
  markers!: any[];

  constructor(
    private store: Store
    ) {
      this.store.select(getLocations).subscribe((data: any) => {
        this.markers = data;
      });
    }

  public ngOnInit(): void {
    this.center = {
      lat: 35.00524,
      lng: 32.06384,
    }
  }
  
  public openInfo(marker: MapMarker) {
    this.selectedLocation = this.markers.find((item: any) => item.name === marker.marker?.getTitle());
    this.infoWindow.open(marker)
  }

  public onMarkerClose() {
    this.selectedLocation = null;
  }
}
