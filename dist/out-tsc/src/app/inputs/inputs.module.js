import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InputsPage } from './inputs.page';
const routes = [
    {
        path: '',
        component: InputsPage
    }
];
let InputsPageModule = class InputsPageModule {
};
InputsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [InputsPage]
    })
], InputsPageModule);
export { InputsPageModule };
//# sourceMappingURL=inputs.module.js.map