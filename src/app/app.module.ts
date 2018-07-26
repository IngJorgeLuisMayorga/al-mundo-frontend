import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { ComponentsModule } from "./lib/components/components.module";
import { HomeModule } from "./views/home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, ComponentsModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
