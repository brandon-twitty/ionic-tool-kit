import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyPhotosFourthPage } from './empty-photos-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyPhotosFourthPage
    }
];
let EmptyPhotosFourthPageModule = class EmptyPhotosFourthPageModule {
};
EmptyPhotosFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyPhotosFourthPage]
    })
], EmptyPhotosFourthPageModule);
export { EmptyPhotosFourthPageModule };
//# sourceMappingURL=empty-photos-fourth.module.js.map