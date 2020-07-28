import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DividersListPage } from './dividers-list.page';
const routes = [
    {
        path: '',
        component: DividersListPage
    }
];
let DividersListPageModule = class DividersListPageModule {
};
DividersListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DividersListPage]
    })
], DividersListPageModule);
export { DividersListPageModule };
//# sourceMappingURL=dividers-list.module.js.map