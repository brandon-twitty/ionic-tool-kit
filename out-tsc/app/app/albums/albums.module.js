import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlbumsPage } from './albums.page';
const routes = [
    {
        path: '',
        component: AlbumsPage
    }
];
let AlbumsPageModule = class AlbumsPageModule {
};
AlbumsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AlbumsPage]
    })
], AlbumsPageModule);
export { AlbumsPageModule };
//# sourceMappingURL=albums.module.js.map