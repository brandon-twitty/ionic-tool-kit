import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderedListPage } from './ordered-list.page';
const routes = [
    {
        path: '',
        component: OrderedListPage
    }
];
let OrderedListPageModule = class OrderedListPageModule {
};
OrderedListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [OrderedListPage]
    })
], OrderedListPageModule);
export { OrderedListPageModule };
//# sourceMappingURL=ordered-list.module.js.map