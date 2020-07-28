import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BasicListPage } from './basic-list.page';
const routes = [
    {
        path: '',
        component: BasicListPage
    }
];
let BasicListPageModule = class BasicListPageModule {
};
BasicListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BasicListPage]
    })
], BasicListPageModule);
export { BasicListPageModule };
//# sourceMappingURL=basic-list.module.js.map