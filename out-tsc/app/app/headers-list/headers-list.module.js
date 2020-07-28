import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeadersListPage } from './headers-list.page';
const routes = [
    {
        path: '',
        component: HeadersListPage
    }
];
let HeadersListPageModule = class HeadersListPageModule {
};
HeadersListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [HeadersListPage]
    })
], HeadersListPageModule);
export { HeadersListPageModule };
//# sourceMappingURL=headers-list.module.js.map