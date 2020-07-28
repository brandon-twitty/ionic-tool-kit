import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyNotificationSecondPageRoutingModule } from './empty-notification-second-routing.module';

import { EmptyNotificationSecondPage } from './empty-notification-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyNotificationSecondPageRoutingModule
  ],
  declarations: [EmptyNotificationSecondPage]
})
export class EmptyNotificationSecondPageModule {}
