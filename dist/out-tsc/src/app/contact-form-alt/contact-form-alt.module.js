import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactFormAltPage } from './contact-form-alt.page';
const routes = [
    {
        path: '',
        component: ContactFormAltPage
    }
];
let ContactFormAltPageModule = class ContactFormAltPageModule {
};
ContactFormAltPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ContactFormAltPage]
    })
], ContactFormAltPageModule);
export { ContactFormAltPageModule };
//# sourceMappingURL=contact-form-alt.module.js.map