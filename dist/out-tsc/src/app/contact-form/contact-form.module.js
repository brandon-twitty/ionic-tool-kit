import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactFormPage } from './contact-form.page';
const routes = [
    {
        path: '',
        component: ContactFormPage
    }
];
let ContactFormPageModule = class ContactFormPageModule {
};
ContactFormPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ContactFormPage]
    })
], ContactFormPageModule);
export { ContactFormPageModule };
//# sourceMappingURL=contact-form.module.js.map