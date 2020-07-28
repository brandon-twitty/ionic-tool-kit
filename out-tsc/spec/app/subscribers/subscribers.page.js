var _a;
import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';
let SubscribersPage = class SubscribersPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    presentMenu(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: PopoverMenuComponent,
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
};
SubscribersPage = __decorate([
    Component({
        selector: 'app-subscribers',
        templateUrl: './subscribers.page.html',
        styleUrls: ['./subscribers.page.scss'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof PopoverController !== "undefined" && PopoverController) === "function" ? _a : Object])
], SubscribersPage);
export { SubscribersPage };
//# sourceMappingURL=subscribers.page.js.map