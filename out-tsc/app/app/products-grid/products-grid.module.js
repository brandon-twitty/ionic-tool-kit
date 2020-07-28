import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsGridPage } from './products-grid.page';
const routes = [
    {
        path: '',
        component: ProductsGridPage
    }
];
let ProductsGridPageModule = class ProductsGridPageModule {
};
ProductsGridPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductsGridPage]
    })
], ProductsGridPageModule);
export { ProductsGridPageModule };
//# sourceMappingURL=products-grid.module.js.map