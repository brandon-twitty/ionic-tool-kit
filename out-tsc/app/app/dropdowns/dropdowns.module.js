import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DropdownsPage } from './dropdowns.page';
const routes = [
    {
        path: '',
        component: DropdownsPage
    }
];
let DropdownsPageModule = class DropdownsPageModule {
};
DropdownsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DropdownsPage]
    })
], DropdownsPageModule);
export { DropdownsPageModule };
//# sourceMappingURL=dropdowns.module.js.map