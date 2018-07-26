import { Component, OnInit } from "@angular/core";

@Component({
  selector: "am-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.less"]
})
export class FilterComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}

  public filterByStar(star) {
    console.log(star.value);
  }
}
