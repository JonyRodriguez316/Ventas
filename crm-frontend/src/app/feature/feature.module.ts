import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerToolbarComponent } from './customer/toolbar/customer-toolbar.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerComponent } from './customer/form/customer.component';
import { AsesorComboboxComponent } from './asesor/asesor-combobox/asesor-combobox.component';
import { ProductSearchComponent } from './product/search/product-search.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerToolbarComponent,
    CustomerListComponent,
    AsesorComboboxComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
