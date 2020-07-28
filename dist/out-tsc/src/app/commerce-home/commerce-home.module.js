import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommerceHomePage } from './commerce-home.page';
const routes = [
    {
        path: '',
        component: CommerceHomePage
    }
];
let CommerceHomePageModule = class CommerceHomePageModule {
};
CommerceHomePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CommerceHomePage]
    })
], CommerceHomePageModule);
export { CommerceHomePageModule };
//# sourceMappingURL=commerce-home.module.js.map