import { Component, OnInit, EventEmitter } from "@angular/core";
import { AppService } from "../../../app.service";
import { Observable } from "rxjs/Rx"; // Angular 5/RxJS 5.5
import { Input, Output } from "@angular/core";

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

  @Output() updatingHotels = new EventEmitter<any>();

  constructor(public appService: AppService) {}

  ngOnInit() {}

  public filterByStar(star) {
    console.log(star.value);
  }
  public filterByName() {
    let _name = this.searchText;
    var self = this;
    this.appService.getHotelsByNameSearch(_name).subscribe(data => {
      self.updatingHotels.emit(data);
    });
  }
}
