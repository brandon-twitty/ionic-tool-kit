import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SlidingListPage } from './sliding-list.page';
const routes = [
    {
        path: '',
        component: SlidingListPage
    }
];
let SlidingListPageModule = class SlidingListPageModule {
};
SlidingListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SlidingListPage]
    })
], SlidingListPageModule);
export { SlidingListPageModule };
//# sourceMappingURL=sliding-list.module.js.map