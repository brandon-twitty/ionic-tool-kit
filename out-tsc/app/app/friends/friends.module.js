import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FriendsPage } from './friends.page';
const routes = [
    {
        path: '',
        component: FriendsPage
    }
];
let FriendsPageModule = class FriendsPageModule {
};
FriendsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [FriendsPage]
    })
], FriendsPageModule);
export { FriendsPageModule };
//# sourceMappingURL=friends.module.js.map