import {Injectable} from '@angular/core';
import {TableauBesoinItem} from "../model/tableau-besoin-item.model";
import {TableauBesoin} from "../model/tableau-besoin.model";
import {HttpClient} from "@angular/common/http";
import {TableauBesoinItem1} from "../model/tableau-besoin-item1.model";
import {Fournisseur} from "../model/fournisseur.model";

@Injectable({
  providedIn: 'root'
})
export class TableauBesoinService {
  // private _tableauBesoin =new TableauBesoin();
  private _tableauBesoinItem=new TableauBesoinItem();
  private _tableauBesoinItem1=new TableauBesoinItem1();
  private _tous_les_tables:TableauBesoinItem[];
  private _fournisseur=new Fournisseur();
  private _foundedfournisseur=new Fournisseur();

  constructor(private http: HttpClient) {
  }


  get foundedfournisseur(): Fournisseur {
    return this._foundedfournisseur;
  }

  set foundedfournisseur(value: Fournisseur) {
    this._foundedfournisseur = value;
  }

  get tableauBesoinItem(): TableauBesoinItem {
    return this._tableauBesoinItem;
  }

  set tableauBesoinItem(value: TableauBesoinItem) {
    this._tableauBesoinItem = value;
  }

  get tableauBesoinItem1(): TableauBesoinItem1 {
    return this._tableauBesoinItem1;
  }

  set tableauBesoinItem1(value: TableauBesoinItem1) {
    this._tableauBesoinItem1 = value;
  }

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
  /*getTableauBesoinItem() {

    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/reference/tab1").subscribe(
      data => {
        this.tableauBesoinItem = data;
        console.log(this.tableauBesoinItem.tableauBesoin.expressionBesoinItems)
      }
    )
  }*/
  getTableauBesoinItem(reference) {

    this.http.get<TableauBesoinItem>("http://localhost:8096/v1/admin/tableau-besoin-item/reference/"+reference).subscribe(
      data => {
        this.tableauBesoinItem = data;
        //console.log(this.tableauBesoinItem.tableauBesoin.expressionBesoinItems)
      }
    )
  }  getAllTableauBesoinItem() {
    this.http.get<TableauBesoinItem[]>("http://localhost:8096/v1/admin/tableau-besoin-item/statut/en%20cours").subscribe(
      data => {
        this._tous_les_tables=[...data]
        console.log(data)
      }
    )
  }

  saveTableauBesoinItem1(){
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item1/",this.tableauBesoinItem1).subscribe(
      data=>{
      }
    )

  }

  saveTableauBesoinItem(tableauBesoinItem:TableauBesoinItem){
    let ht=0;
    tableauBesoinItem.tva=tableauBesoinItem.tableauBesoin.tva;
    tableauBesoinItem.tableauBesoin.expressionBesoinItems.forEach(e=>{
      ht+=e.pu*e.quantite;
    })
    tableauBesoinItem.ht=ht;
    tableauBesoinItem.ttc=tableauBesoinItem.tva*ht;
    tableauBesoinItem.statut="reponse"
    this.http.post("http://localhost:8096/v1/admin/tableau-besoin-item/",tableauBesoinItem).subscribe(
      data=>{
        tableauBesoinItem.tableauBesoin.expressionBesoinItems.forEach(e=>{
          e.statut='reponse'
          this.http.put("http://localhost:8096/v1/admin/expression-besoin-item/",e).subscribe(

          )
        })
      }
    )

  }


  get fournisseur(): Fournisseur {
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  public getFournisseur(reference:string){
   return  this.http.get<Fournisseur>("http://localhost:8096/v1/admin/fournisseur/reference/"+reference).subscribe(
     data=>{
       this.foundedfournisseur=data;
       console.log(this.foundedfournisseur)
     }
   );
  }

}
