import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyNotificationSecondPage } from './empty-notification-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyNotificationSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyNotificationSecondPageRoutingModule {}
