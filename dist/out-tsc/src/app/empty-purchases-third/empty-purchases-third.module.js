import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPurchasesThirdPage } from './empty-purchases-third.page';
const routes = [
    {
        path: '',
        component: EmptyPurchasesThirdPage
    }
];
let EmptyPurchasesThirdPageModule = class EmptyPurchasesThirdPageModule {
};
EmptyPurchasesThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPurchasesThirdPage]
    })
], EmptyPurchasesThirdPageModule);
export { EmptyPurchasesThirdPageModule };
//# sourceMappingURL=empty-purchases-third.module.js.map