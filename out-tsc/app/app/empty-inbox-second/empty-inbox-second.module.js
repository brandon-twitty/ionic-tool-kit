import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyInboxSecondPage } from './empty-inbox-second.page';
const routes = [
    {
        path: '',
        component: EmptyInboxSecondPage
    }
];
let EmptyInboxSecondPageModule = class EmptyInboxSecondPageModule {
};
EmptyInboxSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyInboxSecondPage]
    })
], EmptyInboxSecondPageModule);
export { EmptyInboxSecondPageModule };
//# sourceMappingURL=empty-inbox-second.module.js.map