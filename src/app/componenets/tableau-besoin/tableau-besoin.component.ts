import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {HttpClient} from "@angular/common/http";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {TableauBesoinItem1} from "../../controller/model/tableau-besoin-item1.model";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;

}



@Component({
  selector: 'app-tableau-besoin',
  templateUrl: './tableau-besoin.component.html',
  styleUrls: ['./tableau-besoin.component.css']
})
export class TableauBesoinComponent implements OnInit {
 dataSource:Array<ExpressionBesoinItem>

  constructor(private http:HttpClient,private tableauBesoinService:TableauBesoinService) {
  }


  ngOnInit(): void {
   this.tableauBesoinService.getTableauBesoinItem()
  }

  get tableauBesoinItem1(): TableauBesoinItem1 {
    return this.tableauBesoinService.tableauBesoinItem1;
  }

  get tableauBesoinItem(): TableauBesoinItem {
    return this.tableauBesoinService.tableauBesoinItem;
  }
  saveTableauBesoinItem(tableauBesoinItem:TableauBesoinItem){
   this.tableauBesoinService.saveTableauBesoinItem(tableauBesoinItem)
  }
  saveTableauBesoinItem1(){
   this.tableauBesoinService.saveTableauBesoinItem1()
  }

}
