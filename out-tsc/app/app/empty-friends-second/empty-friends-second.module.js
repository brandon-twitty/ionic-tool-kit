import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyFriendsSecondPage } from './empty-friends-second.page';
const routes = [
    {
        path: '',
        component: EmptyFriendsSecondPage
    }
];
let EmptyFriendsSecondPageModule = class EmptyFriendsSecondPageModule {
};
EmptyFriendsSecondPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyFriendsSecondPage]
    })
], EmptyFriendsSecondPageModule);
export { EmptyFriendsSecondPageModule };
//# sourceMappingURL=empty-friends-second.module.js.map