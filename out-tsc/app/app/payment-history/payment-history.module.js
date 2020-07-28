import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentHistoryPage } from './payment-history.page';
const routes = [
    {
        path: '',
        component: PaymentHistoryPage
    }
];
let PaymentHistoryPageModule = class PaymentHistoryPageModule {
};
PaymentHistoryPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PaymentHistoryPage]
    })
], PaymentHistoryPageModule);
export { PaymentHistoryPageModule };
//# sourceMappingURL=payment-history.module.js.map