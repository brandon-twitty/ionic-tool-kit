import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let WalletPage = class WalletPage {
    constructor() {
        this.lineChartData = [
            { data: [1800, -12, 240, 81, 56, 55, 40], label: 'Income/Expense' }
        ];
        this.lineChartLabels = ['Sep 12', 'Sep 12', 'Sep 12', 'Sep 13', 'Sep 15', 'Oct 2', 'Oct 3'];
        this.lineChartOptions = {
            animation: false,
            responsive: true,
            scales: {
                xAxes: [
                    {
                        display: true
                    }
                ],
                yAxes: [
                    {
                        display: false
                    }
                ]
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(119,214,236,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#61CFE9',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,0,1)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
    }
    ngOnInit() {
    }
    // events
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
};
WalletPage = __decorate([
    Component({
        selector: 'app-wallet',
        templateUrl: './wallet.page.html',
        styleUrls: ['./wallet.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], WalletPage);
export { WalletPage };
//# sourceMappingURL=wallet.page.js.map