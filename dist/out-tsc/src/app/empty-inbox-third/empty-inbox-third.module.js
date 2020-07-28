import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyInboxThirdPage } from './empty-inbox-third.page';
const routes = [
    {
        path: '',
        component: EmptyInboxThirdPage
    }
];
let EmptyInboxThirdPageModule = class EmptyInboxThirdPageModule {
};
EmptyInboxThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyInboxThirdPage]
    })
], EmptyInboxThirdPageModule);
export { EmptyInboxThirdPageModule };
//# sourceMappingURL=empty-inbox-third.module.js.map