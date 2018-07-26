import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppService } from "../../app.service";
import { Observable } from "rxjs/Rx"; // Angular 5/RxJS 5.5

@Component({
  selector: "am-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {
  private hotels = [];

  constructor(public appService: AppService) {}

  ngOnInit(): void {
    var self = this;
    self.getHotels();
  }

  getHotels() {
    var self = this;
    this.appService.getHotels().subscribe(data => {
      self.hotels = data;
    });
  }

  filteringHotels(hotels) {
    this.hotels = hotels;
    console.log("new hotels " + this.hotels.length);
  }
}
