import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyInboxFirstPage } from './empty-inbox-first.page';
const routes = [
    {
        path: '',
        component: EmptyInboxFirstPage
    }
];
let EmptyInboxFirstPageModule = class EmptyInboxFirstPageModule {
};
EmptyInboxFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyInboxFirstPage]
    })
], EmptyInboxFirstPageModule);
export { EmptyInboxFirstPageModule };
//# sourceMappingURL=empty-inbox-first.module.js.map