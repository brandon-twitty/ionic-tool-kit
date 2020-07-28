import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IconListPage } from './icon-list.page';
const routes = [
    {
        path: '',
        component: IconListPage
    }
];
let IconListPageModule = class IconListPageModule {
};
IconListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [IconListPage]
    })
], IconListPageModule);
export { IconListPageModule };
//# sourceMappingURL=icon-list.module.js.map