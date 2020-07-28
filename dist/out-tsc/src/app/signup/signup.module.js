import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignupPage } from './signup.page';
const routes = [
    {
        path: '',
        component: SignupPage
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SignupPage]
    })
], SignupPageModule);
export { SignupPageModule };
//# sourceMappingURL=signup.module.js.map