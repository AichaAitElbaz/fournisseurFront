import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './componenets/menu-bar/menu-bar.component';
import {TableauBesoinComponent} from './componenets/tableau-besoin/tableau-besoin.component';
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    TableauBesoinComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
