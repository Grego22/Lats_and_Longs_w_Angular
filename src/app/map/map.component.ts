import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { Component, OnInit } from '@angular/core';
import {MapsAPILoader} from '@agm/core'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
