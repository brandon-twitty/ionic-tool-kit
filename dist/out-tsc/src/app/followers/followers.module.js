import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FollowersPage } from './followers.page';
const routes = [
    {
        path: '',
        component: FollowersPage
    }
];
let FollowersPageModule = class FollowersPageModule {
};
FollowersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [FollowersPage]
    })
], FollowersPageModule);
export { FollowersPageModule };
//# sourceMappingURL=followers.module.js.map