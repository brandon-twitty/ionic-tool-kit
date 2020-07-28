import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonsPage } from './buttons.page';
const routes = [
    {
        path: '',
        component: ButtonsPage
    }
];
let ButtonsPageModule = class ButtonsPageModule {
};
ButtonsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ButtonsPage]
    })
], ButtonsPageModule);
export { ButtonsPageModule };
//# sourceMappingURL=buttons.module.js.map