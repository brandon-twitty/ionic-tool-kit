import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderHistoryPage } from './order-history.page';
const routes = [
    {
        path: '',
        component: OrderHistoryPage
    }
];
let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [OrderHistoryPage]
    })
], OrderHistoryPageModule);
export { OrderHistoryPageModule };
//# sourceMappingURL=order-history.module.js.map