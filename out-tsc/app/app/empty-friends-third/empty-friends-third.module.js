import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyFriendsThirdPage } from './empty-friends-third.page';
const routes = [
    {
        path: '',
        component: EmptyFriendsThirdPage
    }
];
let EmptyFriendsThirdPageModule = class EmptyFriendsThirdPageModule {
};
EmptyFriendsThirdPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyFriendsThirdPage]
    })
], EmptyFriendsThirdPageModule);
export { EmptyFriendsThirdPageModule };
//# sourceMappingURL=empty-friends-third.module.js.map