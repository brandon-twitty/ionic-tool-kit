import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyNotificationFirstPage } from './empty-notification-first.page';
const routes = [
    {
        path: '',
        component: EmptyNotificationFirstPage
    }
];
let EmptyNotificationFirstPageModule = class EmptyNotificationFirstPageModule {
};
EmptyNotificationFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyNotificationFirstPage]
    })
], EmptyNotificationFirstPageModule);
export { EmptyNotificationFirstPageModule };
//# sourceMappingURL=empty-notification-first.module.js.map