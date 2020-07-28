import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SponsorsPage } from './sponsors.page';
const routes = [
    {
        path: '',
        component: SponsorsPage
    }
];
let SponsorsPageModule = class SponsorsPageModule {
};
SponsorsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SponsorsPage]
    })
], SponsorsPageModule);
export { SponsorsPageModule };
//# sourceMappingURL=sponsors.module.js.map