import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPhotosFirstPage } from './empty-photos-first.page';
const routes = [
    {
        path: '',
        component: EmptyPhotosFirstPage
    }
];
let EmptyPhotosFirstPageModule = class EmptyPhotosFirstPageModule {
};
EmptyPhotosFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPhotosFirstPage]
    })
], EmptyPhotosFirstPageModule);
export { EmptyPhotosFirstPageModule };
//# sourceMappingURL=empty-photos-first.module.js.map