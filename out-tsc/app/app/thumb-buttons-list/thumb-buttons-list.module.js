import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ThumbButtonsListPage } from './thumb-buttons-list.page';
const routes = [
    {
        path: '',
        component: ThumbButtonsListPage
    }
];
let ThumbButtonsListPageModule = class ThumbButtonsListPageModule {
};
ThumbButtonsListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ThumbButtonsListPage]
    })
], ThumbButtonsListPageModule);
export { ThumbButtonsListPageModule };
//# sourceMappingURL=thumb-buttons-list.module.js.map