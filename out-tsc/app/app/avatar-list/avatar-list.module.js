import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AvatarListPage } from './avatar-list.page';
const routes = [
    {
        path: '',
        component: AvatarListPage
    }
];
let AvatarListPageModule = class AvatarListPageModule {
};
AvatarListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AvatarListPage]
    })
], AvatarListPageModule);
export { AvatarListPageModule };
//# sourceMappingURL=avatar-list.module.js.map