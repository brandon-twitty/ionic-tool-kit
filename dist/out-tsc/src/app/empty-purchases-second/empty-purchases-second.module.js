import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPurchasesSecondPage } from './empty-purchases-second.page';
const routes = [
    {
        path: '',
        component: EmptyPurchasesSecondPage
    }
];
let EmptyPurchasesSecondPageModule = class EmptyPurchasesSecondPageModule {
};
EmptyPurchasesSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPurchasesSecondPage]
    })
], EmptyPurchasesSecondPageModule);
export { EmptyPurchasesSecondPageModule };
//# sourceMappingURL=empty-purchases-second.module.js.map