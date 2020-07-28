import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CondensedSlidingListPage } from './condensed-sliding-list.page';
const routes = [
    {
        path: '',
        component: CondensedSlidingListPage
    }
];
let CondensedSlidingListPageModule = class CondensedSlidingListPageModule {
};
CondensedSlidingListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CondensedSlidingListPage]
    })
], CondensedSlidingListPageModule);
export { CondensedSlidingListPageModule };
//# sourceMappingURL=condensed-sliding-list.module.js.map