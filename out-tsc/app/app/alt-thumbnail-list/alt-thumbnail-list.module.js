import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AltThumbnailListPage } from './alt-thumbnail-list.page';
const routes = [
    {
        path: '',
        component: AltThumbnailListPage
    }
];
let AltThumbnailListPageModule = class AltThumbnailListPageModule {
};
AltThumbnailListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AltThumbnailListPage]
    })
], AltThumbnailListPageModule);
export { AltThumbnailListPageModule };
//# sourceMappingURL=alt-thumbnail-list.module.js.map