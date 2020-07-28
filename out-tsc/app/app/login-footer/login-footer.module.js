import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginFooterPage } from './login-footer.page';
const routes = [
    {
        path: '',
        component: LoginFooterPage
    }
];
let LoginFooterPageModule = class LoginFooterPageModule {
};
LoginFooterPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LoginFooterPage]
    })
], LoginFooterPageModule);
export { LoginFooterPageModule };
//# sourceMappingURL=login-footer.module.js.map