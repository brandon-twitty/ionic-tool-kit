import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyVideosFifthPage } from './empty-videos-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyVideosFifthPage
    }
];
let EmptyVideosFifthPageModule = class EmptyVideosFifthPageModule {
};
EmptyVideosFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyVideosFifthPage]
    })
], EmptyVideosFifthPageModule);
export { EmptyVideosFifthPageModule };
//# sourceMappingURL=empty-videos-fifth.module.js.map