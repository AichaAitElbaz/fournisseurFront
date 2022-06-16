import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {HttpClient} from "@angular/common/http";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Fournisseur} from "../../controller/model/fournisseur.model";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  reference: string;
  fournisseurreference: string;
  id: number;
  dataSource: Array<ExpressionBesoinItem>
  constructor(private http: HttpClient, private tableauBesoinService: TableauBesoinService, private activatedRoute:ActivatedRoute) {
  }


  get fournisseur(): Fournisseur {
    return this.tableauBesoinService.fournisseur;
  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];

    this.tableauBesoinService.getAllTableauBesoinItem();
    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params['reference'])
    //   if (typeof params['reference'] !== 'undefined') {
    //     this.reference = params['reference'];
    //
    //   } else {
    //     this.reference = 'tab1';
    //
    //   }
    // });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.reference = params['reference'];
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.fournisseurreference = params['datareference'];
    });
    this.getFournisseurByreference(this.fournisseurreference);


  }
  get foundedfournisseur(): Fournisseur {
    return this.tableauBesoinService.foundedfournisseur;
  }

  public updateRib(){
    console.log(this.foundedfournisseur.rib)
    return this.http.put("http://localhost:8096/v1/admin/fournisseur/rib",this.foundedfournisseur).subscribe(
      data=>{
        console.log(this.foundedfournisseur.rib)
      }
    );
  }

  public getFournisseurByreference(refrence:string){
    this.tableauBesoinService.getFournisseur(refrence);
  }

}
