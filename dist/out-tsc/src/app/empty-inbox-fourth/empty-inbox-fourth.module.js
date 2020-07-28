import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyInboxFourthPage } from './empty-inbox-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyInboxFourthPage
    }
];
let EmptyInboxFourthPageModule = class EmptyInboxFourthPageModule {
};
EmptyInboxFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyInboxFourthPage]
    })
], EmptyInboxFourthPageModule);
export { EmptyInboxFourthPageModule };
//# sourceMappingURL=empty-inbox-fourth.module.js.map