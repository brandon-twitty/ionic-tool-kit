import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NoLinesListPage } from './no-lines-list.page';
const routes = [
    {
        path: '',
        component: NoLinesListPage
    }
];
let NoLinesListPageModule = class NoLinesListPageModule {
};
NoLinesListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NoLinesListPage]
    })
], NoLinesListPageModule);
export { NoLinesListPageModule };
//# sourceMappingURL=no-lines-list.module.js.map