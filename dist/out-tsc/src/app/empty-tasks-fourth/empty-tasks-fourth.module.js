import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyTasksFourthPage } from './empty-tasks-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyTasksFourthPage
    }
];
let EmptyTasksFourthPageModule = class EmptyTasksFourthPageModule {
};
EmptyTasksFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyTasksFourthPage]
    })
], EmptyTasksFourthPageModule);
export { EmptyTasksFourthPageModule };
//# sourceMappingURL=empty-tasks-fourth.module.js.map