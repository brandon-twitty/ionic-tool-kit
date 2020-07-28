import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyNotificationFourthPage } from './empty-notification-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyNotificationFourthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyNotificationFourthPageRoutingModule {}
