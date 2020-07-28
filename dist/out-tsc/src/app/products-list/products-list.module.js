import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsListPage } from './products-list.page';
const routes = [
    {
        path: '',
        component: ProductsListPage
    }
];
let ProductsListPageModule = class ProductsListPageModule {
};
ProductsListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ProductsListPage]
    })
], ProductsListPageModule);
export { ProductsListPageModule };
//# sourceMappingURL=products-list.module.js.map