import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyTasksFifthPage } from './empty-tasks-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyTasksFifthPage
    }
];
let EmptyTasksFifthPageModule = class EmptyTasksFifthPageModule {
};
EmptyTasksFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyTasksFifthPage]
    })
], EmptyTasksFifthPageModule);
export { EmptyTasksFifthPageModule };
//# sourceMappingURL=empty-tasks-fifth.module.js.map