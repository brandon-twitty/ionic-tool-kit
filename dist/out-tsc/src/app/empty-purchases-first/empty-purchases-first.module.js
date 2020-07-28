import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPurchasesFirstPage } from './empty-purchases-first.page';
const routes = [
    {
        path: '',
        component: EmptyPurchasesFirstPage
    }
];
let EmptyPurchasesFirstPageModule = class EmptyPurchasesFirstPageModule {
};
EmptyPurchasesFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPurchasesFirstPage]
    })
], EmptyPurchasesFirstPageModule);
export { EmptyPurchasesFirstPageModule };
//# sourceMappingURL=empty-purchases-first.module.js.map