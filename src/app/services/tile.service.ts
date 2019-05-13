import { Injectable } from '@angular/core';
import { ITile } from '../interfaces/itile';



@Injectable({
  providedIn: 'root'
})
export class TileService {
  tiles: Array<ITile> = [
    {
      name: 'magificient1',
      model: 'nit-01',
      price : 100,
      rating: 4,
      image: 'tile1.jpg',
      status: 0
    },
    {
      name: 'magificient2',
      model: 'nit-02',
      price : 10,
      rating: 3,
      image: 'tile2.jpg',
      status: 1
    },
    {
      name: 'magificient3',
      model: 'nit-03',
      price : 10,
      rating: 2,
      image: 'tile3.jpg',
      status: 0
    },
    {
      name: 'magificient4',
      model: 'nit-05',
      price : 99,
      rating: 1,
      image: 'tile4.jpg',
      status: 1
    },
    {
      name: 'magificient6',
      model: 'nit-05',
      price : 90,
      rating: 0,
      image: 'tile5.ico',
      status: 1
    } ];
 constructor() { }
  getTiles(): Array<ITile> {
  return this.tiles;
     }
}
