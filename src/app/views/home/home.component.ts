import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "am-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get("https://almundo-mayorga.herokuapp.com/api/hotels")
      .subscribe(data => {
        console.log(data);
      });
  }
}
