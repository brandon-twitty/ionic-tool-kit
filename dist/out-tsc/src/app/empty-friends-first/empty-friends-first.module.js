import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyFriendsFirstPage } from './empty-friends-first.page';
const routes = [
    {
        path: '',
        component: EmptyFriendsFirstPage
    }
];
let EmptyFriendsFirstPageModule = class EmptyFriendsFirstPageModule {
};
EmptyFriendsFirstPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyFriendsFirstPage]
    })
], EmptyFriendsFirstPageModule);
export { EmptyFriendsFirstPageModule };
//# sourceMappingURL=empty-friends-first.module.js.map