import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptySentFirstPage } from './empty-sent-first.page';
const routes = [
    {
        path: '',
        component: EmptySentFirstPage
    }
];
let EmptySentFirstPageModule = class EmptySentFirstPageModule {
};
EmptySentFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptySentFirstPage]
    })
], EmptySentFirstPageModule);
export { EmptySentFirstPageModule };
//# sourceMappingURL=empty-sent-first.module.js.map