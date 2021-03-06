import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentPage } from './payment.page';
const routes = [
    {
        path: '',
        component: PaymentPage
    }
];
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PaymentPage]
    })
], PaymentPageModule);
export { PaymentPageModule };
//# sourceMappingURL=payment.module.js.map