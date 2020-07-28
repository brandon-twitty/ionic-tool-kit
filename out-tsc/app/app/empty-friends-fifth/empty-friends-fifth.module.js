import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyFriendsFifthPage } from './empty-friends-fifth.page';
const routes = [
    {
        path: '',
        component: EmptyFriendsFifthPage
    }
];
let EmptyFriendsFifthPageModule = class EmptyFriendsFifthPageModule {
};
EmptyFriendsFifthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyFriendsFifthPage]
    })
], EmptyFriendsFifthPageModule);
export { EmptyFriendsFifthPageModule };
//# sourceMappingURL=empty-friends-fifth.module.js.map