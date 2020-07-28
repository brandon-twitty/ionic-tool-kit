import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPurchasesFifthPage } from './empty-purchases-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyPurchasesFifthPage
    }
];
let EmptyPurchasesFifthPageModule = class EmptyPurchasesFifthPageModule {
};
EmptyPurchasesFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPurchasesFifthPage]
    })
], EmptyPurchasesFifthPageModule);
export { EmptyPurchasesFifthPageModule };
//# sourceMappingURL=empty-purchases-fifth.module.js.map