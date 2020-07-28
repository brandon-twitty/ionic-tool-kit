import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventsListPage } from './events-list.page';
const routes = [
    {
        path: '',
        component: EventsListPage
    }
];
let EventsListPageModule = class EventsListPageModule {
};
EventsListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EventsListPage]
    })
], EventsListPageModule);
export { EventsListPageModule };
//# sourceMappingURL=events-list.module.js.map