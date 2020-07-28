import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyNotificationFourthPageRoutingModule } from './empty-notification-fourth-routing.module';

import { EmptyNotificationFourthPage } from './empty-notification-fourth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyNotificationFourthPageRoutingModule
  ],
  declarations: [EmptyNotificationFourthPage]
})
export class EmptyNotificationFourthPageModule {}
