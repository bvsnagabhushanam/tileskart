import { Component, OnInit } from '@angular/core';
import { ITile } from '../interfaces/itile';
import {TileService} from '../services/tile.service';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  today: Number = Date.now();
  selectedFilter = 'name';
  filterText: any = '';
  filterOptions: Array<string> = ['name' , 'model' , 'price' , 'sataus'];
 filteredTiles: Array<ITile>;
 tiles: Array<ITile>;

//  tileservice:TileService;
// tslint:disable-next-line:no-inferrable-types
imagePath: string = '/assets/images/' ;
  constructor( private tileservice: TileService) {
    this.filteredTiles = this.tiles;
    // this.tileservice=new  TileService;
    this.tiles = this.tileservice.getTiles();
   }

  tile: Array<ITile>;

  ngOnInit() {
     this.tiles = this.tileservice.getTiles();
    this.filteredTiles = this.tiles;
  }
  filter() {
      console.log(this.selectedFilter);
      console.log(this.filterText);
    this.filteredTiles =  this.performFilter(this.filterText, this.selectedFilter, this.tiles);
    }
   performFilter(filterText: string, filterCriteria: string, tileArray: ITile[]) {
  const fillArray = tileArray.filter((tile) => {
    if (filterCriteria === 'price')  {
      if ( tile.price >= 100) {
        return  true;
      } else {
        return false;
      }
    }

  });
  return fillArray;
}


}
