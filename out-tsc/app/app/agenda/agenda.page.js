var _a;
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let AgendaPage = class AgendaPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onIconClick(event) {
        event.stopPropagation();
    }
    goToSessionDetails() {
        this.router.navigate(['session-details']);
    }
};
AgendaPage = __decorate([
    Component({
        selector: 'app-agenda',
        templateUrl: './agenda.page.html',
        styleUrls: ['./agenda.page.scss'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
], AgendaPage);
export { AgendaPage };
//# sourceMappingURL=agenda.page.js.map