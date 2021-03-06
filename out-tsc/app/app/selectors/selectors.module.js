import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SelectorsPage } from './selectors.page';
const routes = [
    {
        path: '',
        component: SelectorsPage
    }
];
let SelectorsPageModule = class SelectorsPageModule {
};
SelectorsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SelectorsPage]
    })
], SelectorsPageModule);
export { SelectorsPageModule };
//# sourceMappingURL=selectors.module.js.map