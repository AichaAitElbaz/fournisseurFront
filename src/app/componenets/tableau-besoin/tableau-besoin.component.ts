import {Component, OnInit} from '@angular/core';
import {ExpressionBesoinService} from "../../controller/service/expression-besoin.service";
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {HttpClient} from "@angular/common/http";

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

  constructor(private expressionBesoinService: ExpressionBesoinService,private http:HttpClient) {
  }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit(): void {
 this.expressionBesoinService.getItems()
 //    this.dataSource=this.expressionBesoinsItems;
  }
  displayedColumns: ExpressionBesoinItem[] ;
  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    return this.expressionBesoinService.expressionBesoinsItems;
  }


  saveItem(expressionBesoinItem:ExpressionBesoinItem) {
    this.expressionBesoinService.saveItem(expressionBesoinItem)
  }
}
