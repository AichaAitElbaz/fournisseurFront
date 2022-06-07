import {ExpressionBesoinItem} from "./expression-besoin-item.model";
import {Fournisseur} from "./fournisseur.model";

export class TableauBesoinItem1 {
  public id:number;
  public quantite:number;
  public pu:number;
  public reference:string;
  public designation:string;
  public expressionBesoinItem=new ExpressionBesoinItem();
  public fournisseur:Fournisseur
}
