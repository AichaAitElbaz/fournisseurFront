import { Component, OnInit } from '@angular/core';
import {ExpressionBesoinItem} from "../../controller/model/expression-besoin-item.model";
import {HttpClient} from "@angular/common/http";
import {TableauBesoinService} from "../../controller/service/tableau-besoin.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  reference: string;
  id: number;
  dataSource: Array<ExpressionBesoinItem>
  constructor(private http: HttpClient, private tableauBesoinService: TableauBesoinService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

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
      console.log("this is "+this.reference)
    })

}
}
