import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AltSlidingListPage } from './alt-sliding-list.page';
const routes = [
    {
        path: '',
        component: AltSlidingListPage
    }
];
let AltSlidingListPageModule = class AltSlidingListPageModule {
};
AltSlidingListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AltSlidingListPage]
    })
], AltSlidingListPageModule);
export { AltSlidingListPageModule };
//# sourceMappingURL=alt-sliding-list.module.js.map