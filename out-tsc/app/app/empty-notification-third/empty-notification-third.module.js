import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyNotificationThirdPage } from './empty-notification-third.page';
const routes = [
    {
        path: '',
        component: EmptyNotificationThirdPage
    }
];
let EmptyNotificationThirdPageModule = class EmptyNotificationThirdPageModule {
};
EmptyNotificationThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyNotificationThirdPage]
    })
], EmptyNotificationThirdPageModule);
export { EmptyNotificationThirdPageModule };
//# sourceMappingURL=empty-notification-third.module.js.map