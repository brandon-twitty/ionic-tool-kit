import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalendarPage } from './calendar.page';
const routes = [
    {
        path: '',
        component: CalendarPage
    }
];
let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CalendarPage]
    })
], CalendarPageModule);
export { CalendarPageModule };
//# sourceMappingURL=calendar.module.js.map