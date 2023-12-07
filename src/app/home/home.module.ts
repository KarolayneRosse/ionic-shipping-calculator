import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ShippPageModule } from '../shippCalculate/shipp.module';
import { ShippPage } from '../shippCalculate/shipp.page';
import { RegisterPage } from '../registerCarrier/register.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ShippPageModule
  ],
  declarations: [HomePage, ShippPage, RegisterPage]
})
export class HomePageModule {}
