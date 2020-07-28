import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfirmationPage } from './confirmation.page';
const routes = [
    {
        path: '',
        component: ConfirmationPage
    }
];
let ConfirmationPageModule = class ConfirmationPageModule {
};
ConfirmationPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ConfirmationPage]
    })
], ConfirmationPageModule);
export { ConfirmationPageModule };
//# sourceMappingURL=confirmation.module.js.map