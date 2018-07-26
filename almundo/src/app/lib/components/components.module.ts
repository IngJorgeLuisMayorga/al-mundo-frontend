import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { HotelItemComponent } from './hotel-item/hotel-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, FilterComponent, HotelItemComponent],
  exports: [HeaderComponent, FooterComponent, FilterComponent, HotelItemComponent]
})
export class ComponentsModule { }
