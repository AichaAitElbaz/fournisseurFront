import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CommonModule} from "@angular/common";


// @ts-ignore
import {MatDialogModule} from "@angular/material";
import {TableauBesoinComponent} from "./componenets/tableau-besoin/tableau-besoin.component";
import {DataComponent} from "./componenets/data/data.component";

const routes: Routes = [


  {path: '', component: DataComponent},
  {path: 'reference/:reference', component: TableauBesoinComponent},
  {path: 'data/:datareference', component: DataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
