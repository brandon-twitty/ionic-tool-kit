import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SubscribersPage } from './subscribers.page';
const routes = [
    {
        path: '',
        component: SubscribersPage
    }
];
let SubscribersPageModule = class SubscribersPageModule {
};
SubscribersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SubscribersPage]
    })
], SubscribersPageModule);
export { SubscribersPageModule };
//# sourceMappingURL=subscribers.module.js.map