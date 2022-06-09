import {Injectable} from '@angular/core';
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";
import {TableauBesoin} from "../model/tableau-besoin.model";
import {HttpClient} from "@angular/common/http";
import {TableauBesoinItem1} from "../model/tableau-besoin-item1.model";

@Injectable({
  providedIn: 'root'
})
export class TableauBesoinService {
  // private _tableauBesoin =new TableauBesoin();
  private _tableauBesoinItem=new TableauBesoinItem();
  // private _tableauBesoinItem1=new TableauBesoinItem1();

  constructor(private http: HttpClient) {
  }


  get tableauBesoinItem(): TableauBesoinItem {
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem) {
    this._tableauBesoinItem = value;
  }

  // get tableauBesoinItem1(): TableauBesoinItem1 {
  //   return this._tableauBesoinItem1;
  // }
  //
  // set tableauBesoinItem1(value: TableauBesoinItem1) {
  //   this._tableauBesoinItem1 = value;
  // }

// get tableauBesoin(): TableauBesoin {
  //   return this._tableauBesoin;
  // }
  //
  // set tableauBesoin(value: TableauBesoin) {
  //   this._tableauBesoin = value;
  // }

  // getTableauBesoinEnCours() {
  //   this.http.get<TableauBesoin>("http://localhost:8098/v1/admin/tableau-besoin/statut/{statut}?statut=En%20cours").subscribe(
  //     data => {
  //       this.tableauBesoin = data;
  //       console.log(data)
  //     }
  //   )
  // }
  getTableauBesoinItem() {
    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/reference/tab2").subscribe(
      data => {
        this.tableauBesoinItem = data;
        console.log(data)
        console.log(this.tableauBesoinItem)
      }
    )
  }



  saveTableauBesoinItem(tableauBesoinItem:TableauBesoinItem){
    let ht=0;
    tableauBesoinItem.tva=tableauBesoinItem.tableauBesoin.tva;
    tableauBesoinItem.tableauBesoin.expressionBesoinItems.forEach(e=>{
      e.pt=e.pu*e.quantite;
      ht+=e.pu*e.quantite;
    })
    tableauBesoinItem.ht=ht;
    tableauBesoinItem.ttc=tableauBesoinItem.tva*ht;
    tableauBesoinItem.statut="reponse"
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/",tableauBesoinItem).subscribe(
      data=>{
        console.log("hello aicha")
        console.log(tableauBesoinItem)
      }
    )

  }
}
