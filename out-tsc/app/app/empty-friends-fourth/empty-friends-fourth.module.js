import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EmptyFriendsFourthPage } from './empty-friends-fourth.page';
const routes = [
    {
        path: '',
        component: EmptyFriendsFourthPage
    }
];
let EmptyFriendsFourthPageModule = class EmptyFriendsFourthPageModule {
};
EmptyFriendsFourthPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [EmptyFriendsFourthPage]
    })
], EmptyFriendsFourthPageModule);
export { EmptyFriendsFourthPageModule };
//# sourceMappingURL=empty-friends-fourth.module.js.map