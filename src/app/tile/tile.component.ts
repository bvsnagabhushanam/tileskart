import { Component, OnInit, Input } from '@angular/core';
import { ITile } from '../interfaces/itile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
@Input() tile: any;
imagePath = '/assets/images/';
  constructor() { }

  ngOnInit() {
  }

}
