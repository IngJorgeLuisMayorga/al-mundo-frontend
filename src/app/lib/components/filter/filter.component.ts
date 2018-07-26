import { Component, OnInit } from "@angular/core";
import { AppService } from "../../../app.service";
import { Observable } from "rxjs/Rx"; // Angular 5/RxJS 5.5
@Component({
  selector: "am-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.less"]
})
export class FilterComponent implements OnInit {
  public searchText;
  public filter = {
    stars: [
      {
        value: 0,
        range: []
      },
      {
        value: 5,
        range: Array.from(Array(5).keys())
      },
      {
        value: 4,
        range: Array.from(Array(4).keys())
      },
      {
        value: 3,
        range: Array.from(Array(3).keys())
      },
      {
        value: 2,
        range: Array.from(Array(2).keys())
      },
      {
        value: 1,
        range: Array.from(Array(1).keys())
      }
    ]
  };

  constructor(public appService: AppService) {}

  ngOnInit() {}

  public filterByStar(star) {
    console.log(star.value);
  }
  public filterByName() {
    let _name = this.searchText;
    this.appService.getHotels().subscribe(data => {
      console.log(data);
    });
  }
}
