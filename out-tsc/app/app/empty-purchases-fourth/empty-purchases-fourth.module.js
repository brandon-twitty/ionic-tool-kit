import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPurchasesFourthPage } from './empty-purchases-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyPurchasesFourthPage
    }
];
let EmptyPurchasesFourthPageModule = class EmptyPurchasesFourthPageModule {
};
EmptyPurchasesFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPurchasesFourthPage]
    })
], EmptyPurchasesFourthPageModule);
export { EmptyPurchasesFourthPageModule };
//# sourceMappingURL=empty-purchases-fourth.module.js.map