import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CommonModule} from "@angular/common";


// @ts-ignore
import {MatDialogModule} from "@angular/material";
import {TableauBesoinComponent} from "./componenets/tableau-besoin/tableau-besoin.component";
import {DataComponent} from "./componenets/data/data.component";

const routes: Routes = [


  {path: 's/:id', component: DataComponent},
  {path: ':reference', component: TableauBesoinComponent},
  // {path: '', component: TableauBesoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
