import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
let DayOverviewPage = class DayOverviewPage {
    constructor() {
        this.radarChartLabels = ['24:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
        this.radarChartData = [
            { data: [65, 79, 90, 181, 255, 266, 289, 315], label: 'Aware mobile' },
            { data: [28, 48, 50, 119, 296, 327, 390, 412], label: 'Sked mobile' }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: 'rgba(151,198,107,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#97C66B'
            },
            {
                backgroundColor: 'rgba(255,137,192,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#FF89C0'
            }
        ];
        this.radarChartLegend = false;
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
DayOverviewPage = __decorate([
    Component({
        selector: 'app-day-overview',
        templateUrl: './day-overview.page.html',
        styleUrls: ['./day-overview.page.scss'],
    }),
    __metadata("design:paramtypes", [])
], DayOverviewPage);
export { DayOverviewPage };
//# sourceMappingURL=day-overview.page.js.map