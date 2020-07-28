import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { ExpenseOverviewPage } from './expense-overview.page';
const routes = [
    {
        path: '',
        component: ExpenseOverviewPage
    }
];
let ExpenseOverviewPageModule = class ExpenseOverviewPageModule {
};
ExpenseOverviewPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            ChartsModule
        ],
        declarations: [ExpenseOverviewPage]
    })
], ExpenseOverviewPageModule);
export { ExpenseOverviewPageModule };
//# sourceMappingURL=expense-overview.module.js.map