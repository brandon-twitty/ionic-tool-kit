import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ScheduleMonthPage } from './schedule-month.page';
const routes = [
    {
        path: '',
        component: ScheduleMonthPage
    }
];
let ScheduleMonthPageModule = class ScheduleMonthPageModule {
};
ScheduleMonthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ScheduleMonthPage]
    })
], ScheduleMonthPageModule);
export { ScheduleMonthPageModule };
//# sourceMappingURL=schedule-month.module.js.map