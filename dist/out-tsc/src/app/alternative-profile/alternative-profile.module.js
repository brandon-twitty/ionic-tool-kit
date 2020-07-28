import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlternativeProfilePage } from './alternative-profile.page';
const routes = [
    {
        path: '',
        component: AlternativeProfilePage
    }
];
let AlternativeProfilePageModule = class AlternativeProfilePageModule {
};
AlternativeProfilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AlternativeProfilePage]
    })
], AlternativeProfilePageModule);
export { AlternativeProfilePageModule };
//# sourceMappingURL=alternative-profile.module.js.map