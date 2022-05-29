import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExpressionBesoin} from "../model/expression-besoin.model";
import {ExpressionBesoinItem} from "../model/expression-besoin-item.model";
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";

@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinService {
  private _expressionBesoins: Array<ExpressionBesoin>;
  private _expressionBesoinsItems: Array<ExpressionBesoinItem>;
  private _tableauBesoinItem: TableauBesoinItem;

  constructor(private http: HttpClient) {
  }

  public getItems() {
    this.http.get<Array<ExpressionBesoinItem>>("http://localhost:8096/v1/admin/expression-besoin-item/statut/valid%C3%A9e").subscribe(
      data => {
        this.expressionBesoinsItems = [...data]
        console.log(data)
      }
    )
  }
public saveItem(expressionBesoinItem:ExpressionBesoinItem){
      this.http.post("http://localhost:8096/v1/admin/expression-besoin-item/",expressionBesoinItem).subscribe(
        data=>{
          console.log(expressionBesoinItem)
        }
      )

}

  get expressionBesoinsItems(): Array<ExpressionBesoinItem> {
    if (this._expressionBesoinsItems == null) this._expressionBesoinsItems = new Array<ExpressionBesoinItem>();
    return this._expressionBesoinsItems;
  }

  set expressionBesoinsItems(value: Array<ExpressionBesoinItem>) {
    this._expressionBesoinsItems = value;
  }


  get tableauBesoinItem(): TableauBesoinItem {
    if (this._tableauBesoinItem == null) this._tableauBesoinItem = new TableauBesoinItem();
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem) {
    this._tableauBesoinItem = value;
  }
}
