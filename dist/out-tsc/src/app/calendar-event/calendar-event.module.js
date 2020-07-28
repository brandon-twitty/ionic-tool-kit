import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalendarEventPage } from './calendar-event.page';
const routes = [
    {
        path: '',
        component: CalendarEventPage
    }
];
let CalendarEventPageModule = class CalendarEventPageModule {
};
CalendarEventPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CalendarEventPage]
    })
], CalendarEventPageModule);
export { CalendarEventPageModule };
//# sourceMappingURL=calendar-event.module.js.map