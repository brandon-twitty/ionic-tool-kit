import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeAltPage } from './home-alt.page';
const routes = [
    {
        path: '',
        component: HomeAltPage
    }
];
let HomeAltPageModule = class HomeAltPageModule {
};
HomeAltPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [HomeAltPage]
    })
], HomeAltPageModule);
export { HomeAltPageModule };
//# sourceMappingURL=home-alt.module.js.map