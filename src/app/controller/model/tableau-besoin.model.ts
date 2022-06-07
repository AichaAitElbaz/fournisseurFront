import {Fournisseur} from "./fournisseur.model";
import {ExpressionBesoinItem} from "./expression-besoin-item.model";

export class TableauBesoin {
  public reference:string;
  public statut:string;
  public expressionBesoinItems=new Array<ExpressionBesoinItem>();
  public tva:number;
  public ttc:number;
}
