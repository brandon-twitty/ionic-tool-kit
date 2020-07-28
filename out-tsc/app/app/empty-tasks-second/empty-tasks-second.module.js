import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyTasksSecondPage } from './empty-tasks-second.page';
const routes = [
    {
        path: '',
        component: EmptyTasksSecondPage
    }
];
let EmptyTasksSecondPageModule = class EmptyTasksSecondPageModule {
};
EmptyTasksSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyTasksSecondPage]
    })
], EmptyTasksSecondPageModule);
export { EmptyTasksSecondPageModule };
//# sourceMappingURL=empty-tasks-second.module.js.map