import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [MapComponent, ColumnComponent],
  providers: [
    GoogleMap
  ]
})
export class MapModule { }
