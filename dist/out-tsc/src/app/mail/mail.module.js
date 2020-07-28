import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MailPage } from './mail.page';
const routes = [
    {
        path: '',
        component: MailPage
    }
];
let MailPageModule = class MailPageModule {
};
MailPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [MailPage]
    })
], MailPageModule);
export { MailPageModule };
//# sourceMappingURL=mail.module.js.map