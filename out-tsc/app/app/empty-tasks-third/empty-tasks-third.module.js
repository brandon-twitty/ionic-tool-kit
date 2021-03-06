import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyTasksThirdPage } from './empty-tasks-third.page';
const routes = [
    {
        path: '',
        component: EmptyTasksThirdPage
    }
];
let EmptyTasksThirdPageModule = class EmptyTasksThirdPageModule {
};
EmptyTasksThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyTasksThirdPage]
    })
], EmptyTasksThirdPageModule);
export { EmptyTasksThirdPageModule };
//# sourceMappingURL=empty-tasks-third.module.js.map