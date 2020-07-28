var _a;
import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let SpeakerDetailsPage = class SpeakerDetailsPage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            autoplay: true
        };
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
SpeakerDetailsPage = __decorate([
    Component({
        selector: 'app-speaker-details',
        templateUrl: './speaker-details.page.html',
        styleUrls: ['./speaker-details.page.scss'],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof Router !== "undefined" && Router) === "function" ? _a : Object])
], SpeakerDetailsPage);
export { SpeakerDetailsPage };
//# sourceMappingURL=speaker-details.page.js.map