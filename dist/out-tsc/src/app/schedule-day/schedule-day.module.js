import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ScheduleDayPage } from './schedule-day.page';
const routes = [
    {
        path: '',
        component: ScheduleDayPage
    }
];
let ScheduleDayPageModule = class ScheduleDayPageModule {
};
ScheduleDayPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ScheduleDayPage]
    })
], ScheduleDayPageModule);
export { ScheduleDayPageModule };
//# sourceMappingURL=schedule-day.module.js.map