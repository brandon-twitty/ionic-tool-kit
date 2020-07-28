import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsThirdPage } from './product-details-third.page';
const routes = [
    {
        path: '',
        component: ProductDetailsThirdPage
    }
];
let ProductDetailsThirdPageModule = class ProductDetailsThirdPageModule {
};
ProductDetailsThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductDetailsThirdPage]
    })
], ProductDetailsThirdPageModule);
export { ProductDetailsThirdPageModule };
//# sourceMappingURL=product-details-third.module.js.map