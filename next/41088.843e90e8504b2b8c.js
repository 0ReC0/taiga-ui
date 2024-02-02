(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[41088],{41088:n=>{n.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    TUI_IS_E2E,\n    TuiDay,\n    TuiDayLike,\n    TuiDayRange,\n    tuiPure,\n    TuiTypedMapper,\n    TuiTypedMatcher,\n} from '@taiga-ui/cdk';\nimport {TuiPoint} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-line-days-chart-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiLineDaysChartExample2 {\n    data = new TuiDayRange(\n        TuiDay.currentLocal(),\n        TuiDay.currentLocal().append({month: 5}),\n    );\n\n    show = this.data;\n\n    days: ReadonlyArray<ReadonlyArray<[TuiDay, number]>> = this.computeArrays(this.data);\n\n    readonly maxLength: TuiDayLike = {month: 6};\n\n    constructor(@Inject(TUI_IS_E2E) readonly isE2E: boolean) {}\n\n    get range(): TuiDayRange {\n        return this.computeRange(this.show);\n    }\n\n    @tuiPure\n    getWidth({from, to}: TuiDayRange): number {\n        return TuiDay.lengthBetween(from, to);\n    }\n\n    @tuiPure\n    getDate(day: TuiDay | number, date: TuiDay): TuiDay {\n        return day instanceof TuiDay ? day : date.append({day});\n    }\n\n    readonly filter: TuiTypedMatcher<[readonly [TuiDay, number], TuiDayRange]> = (\n        [day],\n        {from, to},\n    ) => day.daySameOrAfter(from) && day.daySameOrBefore(to);\n\n    readonly toNumbers: TuiTypedMapper<\n        [ReadonlyArray<readonly [TuiDay, number]>, TuiDayRange],\n        readonly TuiPoint[]\n    > = (days, {from}) =>\n        days.map(([day, value]) => [TuiDay.lengthBetween(from, day), value]);\n\n    onDataChange(data: TuiDayRange): void {\n        this.days = this.computeArrays(data);\n    }\n\n    @tuiPure\n    private computeRange(range: TuiDayRange): TuiDayRange {\n        const {from, to} = range;\n        const length = TuiDay.lengthBetween(from, to);\n        const dayOfWeekFrom = from.dayOfWeek();\n        const dayOfWeekTo = to.dayOfWeek();\n        const mondayFrom = dayOfWeekFrom ? from.append({day: 7 - dayOfWeekFrom}) : from;\n        const mondayTo = dayOfWeekTo ? to.append({day: 7 - dayOfWeekTo}) : to;\n        const mondaysLength = TuiDay.lengthBetween(mondayFrom, mondayTo);\n\n        if (length > 90) {\n            return range;\n        }\n\n        if (length > 60) {\n            return new TuiDayRange(\n                mondayFrom,\n                mondayTo.append({day: mondaysLength % 14}),\n            );\n        }\n\n        if (length > 14) {\n            return new TuiDayRange(mondayFrom, mondayTo);\n        }\n\n        return new TuiDayRange(from, to.append({day: length % 2}));\n    }\n\n    // Random data generation\n    @tuiPure\n    private computeData(\n        {from, to}: TuiDayRange,\n        initial: number,\n    ): ReadonlyArray<[TuiDay, number]> {\n        return new Array(TuiDay.lengthBetween(from, to) + 1)\n            .fill(0)\n            .reduce<ReadonlyArray<[TuiDay, number]>>(\n                (array, _, i) => [\n                    ...array,\n                    [\n                        from.append({day: i}),\n                        this.isE2E\n                            ? initial\n                            : Math.max(\n                                  (i ? array[i - 1][1] : initial) +\n                                      Math.random() * 10 -\n                                      5,\n                                  0,\n                              ),\n                    ],\n                ],\n                [],\n            )\n            .filter(([day]) => day.dayOfWeek() < 5);\n    }\n\n    private computeArrays(\n        data: TuiDayRange,\n    ): ReadonlyArray<ReadonlyArray<[TuiDay, number]>> {\n        return [\n            this.computeData(data, 100),\n            this.computeData(data, 75),\n            this.computeData(data, 50),\n        ];\n    }\n}\n"}}]);