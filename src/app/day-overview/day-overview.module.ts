import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';

import { DayOverviewPage } from './day-overview.page';

const routes: Routes = [
  {
    path: '',
    component: DayOverviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [DayOverviewPage]
})
export class DayOverviewPageModule {}
