import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { DayOverviewPage } from './day-overview.page';
const routes = [
    {
        path: '',
        component: DayOverviewPage
    }
];
let DayOverviewPageModule = class DayOverviewPageModule {
};
DayOverviewPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            ChartsModule
        ],
        declarations: [DayOverviewPage]
    })
], DayOverviewPageModule);
export { DayOverviewPageModule };
//# sourceMappingURL=day-overview.module.js.map