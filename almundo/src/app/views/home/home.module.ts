import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../lib/components/components.module";

import { HomeComponent } from "./home.component";

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
