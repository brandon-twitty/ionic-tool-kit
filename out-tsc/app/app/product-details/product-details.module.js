import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsPage } from './product-details.page';
const routes = [
    {
        path: '',
        component: ProductDetailsPage
    }
];
let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductDetailsPage]
    })
], ProductDetailsPageModule);
export { ProductDetailsPageModule };
//# sourceMappingURL=product-details.module.js.map