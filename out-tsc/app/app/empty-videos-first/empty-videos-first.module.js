import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyVideosFirstPage } from './empty-videos-first.page';
const routes = [
    {
        path: '',
        component: EmptyVideosFirstPage
    }
];
let EmptyVideosFirstPageModule = class EmptyVideosFirstPageModule {
};
EmptyVideosFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyVideosFirstPage]
    })
], EmptyVideosFirstPageModule);
export { EmptyVideosFirstPageModule };
//# sourceMappingURL=empty-videos-first.module.js.map