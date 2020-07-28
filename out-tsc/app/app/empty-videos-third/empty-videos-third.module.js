import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyVideosThirdPage } from './empty-videos-third.page';
const routes = [
    {
        path: '',
        component: EmptyVideosThirdPage
    }
];
let EmptyVideosThirdPageModule = class EmptyVideosThirdPageModule {
};
EmptyVideosThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyVideosThirdPage]
    })
], EmptyVideosThirdPageModule);
export { EmptyVideosThirdPageModule };
//# sourceMappingURL=empty-videos-third.module.js.map