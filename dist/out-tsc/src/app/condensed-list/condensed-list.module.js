import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CondensedListPage } from './condensed-list.page';
const routes = [
    {
        path: '',
        component: CondensedListPage
    }
];
let CondensedListPageModule = class CondensedListPageModule {
};
CondensedListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CondensedListPage]
    })
], CondensedListPageModule);
export { CondensedListPageModule };
//# sourceMappingURL=condensed-list.module.js.map