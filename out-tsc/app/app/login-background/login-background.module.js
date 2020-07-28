import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginBackgroundPage } from './login-background.page';
const routes = [
    {
        path: '',
        component: LoginBackgroundPage
    }
];
let LoginBackgroundPageModule = class LoginBackgroundPageModule {
};
LoginBackgroundPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LoginBackgroundPage]
    })
], LoginBackgroundPageModule);
export { LoginBackgroundPageModule };
//# sourceMappingURL=login-background.module.js.map