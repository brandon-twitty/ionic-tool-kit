import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsFourthPage } from './product-details-fourth.page';
const routes = [
    {
        path: '',
        component: ProductDetailsFourthPage
    }
];
let ProductDetailsFourthPageModule = class ProductDetailsFourthPageModule {
};
ProductDetailsFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductDetailsFourthPage]
    })
], ProductDetailsFourthPageModule);
export { ProductDetailsFourthPageModule };
//# sourceMappingURL=product-details-fourth.module.js.map