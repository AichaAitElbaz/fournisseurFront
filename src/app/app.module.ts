import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './componenets/menu-bar/menu-bar.component';
import {TableauBesoinComponent} from './componenets/tableau-besoin/tableau-besoin.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {DataComponent} from "./componenets/data/data.component";
import { BonCmdComponent } from './components/bon-cmd/bon-cmd.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TableauBesoinComponent,
    BonCmdComponent,
    DataComponent,

  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
