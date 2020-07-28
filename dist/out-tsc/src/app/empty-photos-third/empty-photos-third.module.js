import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPhotosThirdPage } from './empty-photos-third.page';
const routes = [
    {
        path: '',
        component: EmptyPhotosThirdPage
    }
];
let EmptyPhotosThirdPageModule = class EmptyPhotosThirdPageModule {
};
EmptyPhotosThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPhotosThirdPage]
    })
], EmptyPhotosThirdPageModule);
export { EmptyPhotosThirdPageModule };
//# sourceMappingURL=empty-photos-third.module.js.map