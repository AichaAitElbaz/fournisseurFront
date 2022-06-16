import {Component, Input, OnInit} from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {HttpClient} from "@angular/common/http";
import {TableauBesoinItem} from "../../controller/model/tableau-besoin-item.model";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {TableauBesoinItem1} from "../../controller/model/tableau-besoin-item1.model";
import {Router, ActivatedRoute, Params} from '@angular/router';

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
  reference: string;
  id: number;
  dataSource: Array<ExpressionBesoinItem>
  constructor(private http: HttpClient, private tableauBesoinService: TableauBesoinService, private activatedRoute:ActivatedRoute) {
  }


  ngOnInit(): void {
this.tableauBesoinService.getTableauBesoinItem(this.reference)
    this.tableauBesoinService.getAllTableauBesoinItem();
    this.activatedRoute.params.subscribe(params => {
      console.log(params['reference'])
      if (typeof params['reference'] !== 'undefined') {
        this.reference = params['reference'];

      } else {
        alert("table non exist")

      }
    });

    this.tableauBesoinService.getTableauBesoinItem(this.reference);
// this.tableauBesoinService.getTableauBesoinItem();
  }


  get tableauBesoinItem(): TableauBesoinItem {
    return this.tableauBesoinService.tableauBesoinItem;
  }

  saveTableauBesoinItem(tableauBesoinItem: TableauBesoinItem) {
    this.tableauBesoinService.saveTableauBesoinItem(tableauBesoinItem)
  }

  saveTableauBesoinItem1() {
    this.tableauBesoinService.saveTableauBesoinItem1()
  }

}
