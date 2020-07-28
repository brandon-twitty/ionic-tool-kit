import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyVideosSecondPage } from './empty-videos-second.page';
const routes = [
    {
        path: '',
        component: EmptyVideosSecondPage
    }
];
let EmptyVideosSecondPageModule = class EmptyVideosSecondPageModule {
};
EmptyVideosSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyVideosSecondPage]
    })
], EmptyVideosSecondPageModule);
export { EmptyVideosSecondPageModule };
//# sourceMappingURL=empty-videos-second.module.js.map