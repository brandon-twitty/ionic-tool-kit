import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartPage } from './cart.page';
const routes = [
    {
        path: '',
        component: CartPage
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CartPage]
    })
], CartPageModule);
export { CartPageModule };
//# sourceMappingURL=cart.module.js.map