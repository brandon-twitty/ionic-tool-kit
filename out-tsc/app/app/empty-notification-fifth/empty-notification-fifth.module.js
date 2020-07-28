import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyNotificationFifthPage } from './empty-notification-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyNotificationFifthPage
    }
];
let EmptyNotificationFifthPageModule = class EmptyNotificationFifthPageModule {
};
EmptyNotificationFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyNotificationFifthPage]
    })
], EmptyNotificationFifthPageModule);
export { EmptyNotificationFifthPageModule };
//# sourceMappingURL=empty-notification-fifth.module.js.map