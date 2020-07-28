import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddAccountPage } from './add-account.page';
const routes = [
    {
        path: '',
        component: AddAccountPage
    }
];
let AddAccountPageModule = class AddAccountPageModule {
};
AddAccountPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AddAccountPage]
    })
], AddAccountPageModule);
export { AddAccountPageModule };
//# sourceMappingURL=add-account.module.js.map