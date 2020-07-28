import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyTasksFirstPage } from './empty-tasks-first.page';
const routes = [
    {
        path: '',
        component: EmptyTasksFirstPage
    }
];
let EmptyTasksFirstPageModule = class EmptyTasksFirstPageModule {
};
EmptyTasksFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyTasksFirstPage]
    })
], EmptyTasksFirstPageModule);
export { EmptyTasksFirstPageModule };
//# sourceMappingURL=empty-tasks-first.module.js.map