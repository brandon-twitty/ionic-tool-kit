import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let SponsorsPage = class SponsorsPage {
    constructor() {
        this.isShown = [];
        this.items = [
            {
                divider: {
                    title: 'Platinum',
                },
                subitems: [
                    {
                        col_size: '12',
                        target_link: '/sponsors',
                        image: 'assets/imgs/sponsor-1.png'
                    },
                    {
                        col_size: '12',
                        target_link: '/sponsors',
                        image: 'assets/imgs/sponsor-2.png'
                    }
                ]
            },
            {
                divider: {
                    title: 'Gold',
                },
                subitems: [
                    {
                        col_size: '6',
                        target_link: '/sponsors',
                        image: 'assets/imgs/sponsor-3.png'
                    },
                    {
                        col_size: '6',
                        target_link: '/sponsors',
                        image: 'assets/imgs/sponsor-4.png'
                    }
                ]
            },
            {
                divider: {
                    title: 'Silver',
                },
                subitems: [
                    {
                        col_size: '4',
                        target_link: '/sponsors',
                        image: 'assets/imgs/sponsor-5.png'
                    },
                    {
                        col_size: '4',
                        target_link: '/sponsors',
                        image: 'assets/imgs/sponsor-6.png'
                    },
                    {
                        col_size: '4',
                        target_link: '/sponsors',
                        image: 'assets/imgs/sponsor-7.png'
                    }
                ]
            },
        ];
        this.isShown[0] = true;
    }
    ngOnInit() {
    }
    itemTapped(index) {
        this.isShown[index] = !this.isShown[index];
    }
};
SponsorsPage = __decorate([
    Component({
        selector: 'app-sponsors',
        templateUrl: './sponsors.page.html',
        styleUrls: ['./sponsors.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], SponsorsPage);
export { SponsorsPage };
//# sourceMappingURL=sponsors.page.js.map