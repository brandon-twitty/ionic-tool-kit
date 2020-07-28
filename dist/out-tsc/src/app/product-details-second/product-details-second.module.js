import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsSecondPage } from './product-details-second.page';
const routes = [
    {
        path: '',
        component: ProductDetailsSecondPage
    }
];
let ProductDetailsSecondPageModule = class ProductDetailsSecondPageModule {
};
ProductDetailsSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductDetailsSecondPage]
    })
], ProductDetailsSecondPageModule);
export { ProductDetailsSecondPageModule };
//# sourceMappingURL=product-details-second.module.js.map