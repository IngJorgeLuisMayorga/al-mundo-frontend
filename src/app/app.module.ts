import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { ComponentsModule } from "./lib/components/components.module";
import { HomeModule } from "./views/home/home.module";

import { appService } from "./app.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    HomeModule
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule {}
