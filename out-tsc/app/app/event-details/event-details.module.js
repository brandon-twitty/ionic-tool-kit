import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventDetailsPage } from './event-details.page';
const routes = [
    {
        path: '',
        component: EventDetailsPage
    }
];
let EventDetailsPageModule = class EventDetailsPageModule {
};
EventDetailsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EventDetailsPage]
    })
], EventDetailsPageModule);
export { EventDetailsPageModule };
//# sourceMappingURL=event-details.module.js.map