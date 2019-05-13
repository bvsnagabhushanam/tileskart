import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:import-spacing
import   {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order/order.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';
import { StatusPipe } from './pipes/status.pipe';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    TileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TilesComponent, LoginComponent, AppComponent , OrderComponent ]
})
export class AppModule { }
