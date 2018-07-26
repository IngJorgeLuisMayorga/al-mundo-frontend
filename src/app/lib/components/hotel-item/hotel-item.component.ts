import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "am-hotel-item",
  templateUrl: "./hotel-item.component.html",
  styleUrls: ["./hotel-item.component.less"]
})
export class HotelItemComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() stars: number;
  @Input() price: number;
  @Input() amenities: any;

  public starsRange = [];

  constructor() {}

  ngOnInit() {
    this.starsRange = Array.from(Array(this.stars).keys());
  }
}
