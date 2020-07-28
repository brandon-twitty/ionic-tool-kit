import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MultiLineListPage } from './multi-line-list.page';
const routes = [
    {
        path: '',
        component: MultiLineListPage
    }
];
let MultiLineListPageModule = class MultiLineListPageModule {
};
MultiLineListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MultiLineListPage]
    })
], MultiLineListPageModule);
export { MultiLineListPageModule };
//# sourceMappingURL=multi-line-list.module.js.map