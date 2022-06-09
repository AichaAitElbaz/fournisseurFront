import {ExpressionBesoinItem} from "./expression-besoin-item.model";
import {TableauBesoin} from "./tableau-besoin.model";
import {Fournisseur} from "./fournisseur.model";

export class TableauBesoinItem {
  public fournisseur:Fournisseur;
  public tableauBesoin=new TableauBesoin();
  public reference:string;
  public statut:string;
  public tva:number;
  public ttc:number;
  public ht:number;
}
