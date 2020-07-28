import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { DashboardPage } from './dashboard.page';
const routes = [
    {
        path: '',
        component: DashboardPage
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            ChartsModule,
            IonicModule,
            IonicModule
        ],
        declarations: [DashboardPage]
    })
], DashboardPageModule);
export { DashboardPageModule };
//# sourceMappingURL=dashboard.module.js.map