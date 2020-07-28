import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ThumbButtonsListAltPage } from './thumb-buttons-list-alt.page';
const routes = [
    {
        path: '',
        component: ThumbButtonsListAltPage
    }
];
let ThumbButtonsListAltPageModule = class ThumbButtonsListAltPageModule {
};
ThumbButtonsListAltPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ThumbButtonsListAltPage]
    })
], ThumbButtonsListAltPageModule);
export { ThumbButtonsListAltPageModule };
//# sourceMappingURL=thumb-buttons-list-alt.module.js.map