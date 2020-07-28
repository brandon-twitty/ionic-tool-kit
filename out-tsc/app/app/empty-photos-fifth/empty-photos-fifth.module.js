import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPhotosFifthPage } from './empty-photos-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyPhotosFifthPage
    }
];
let EmptyPhotosFifthPageModule = class EmptyPhotosFifthPageModule {
};
EmptyPhotosFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPhotosFifthPage]
    })
], EmptyPhotosFifthPageModule);
export { EmptyPhotosFifthPageModule };
//# sourceMappingURL=empty-photos-fifth.module.js.map