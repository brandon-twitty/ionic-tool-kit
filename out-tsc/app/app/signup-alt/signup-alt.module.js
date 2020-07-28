import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignupAltPage } from './signup-alt.page';
const routes = [
    {
        path: '',
        component: SignupAltPage
    }
];
let SignupAltPageModule = class SignupAltPageModule {
};
SignupAltPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SignupAltPage]
    })
], SignupAltPageModule);
export { SignupAltPageModule };
//# sourceMappingURL=signup-alt.module.js.map