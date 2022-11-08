/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import PickRequired from '../../common/PickRequired'
import KLineData from '../../common/KLineData'
import { IndicatorStyle } from '../../common/Styles'
import { formatValue } from '../../common/utils/format'

import { Indicator, IndicatorCalcOptions, IndicatorSeries, IndicatorPlotStylesData } from '../../componentl/Indicator'

interface Sar {
  sar?: number
}

const stopAndReverse: PickRequired<Partial<Indicator<Sar>>, 'name' | 'calc'> = {
  name: 'SAR',
  shortName: 'SAR',
  series: IndicatorSeries.PRICE,
  calcParams: [2, 2, 20],
  precision: 2,
  shouldOhlc: true,
  plots: [
    {
      key: 'sar',
      title: 'SAR: ',
      type: 'circle',
      styles: (data: IndicatorPlotStylesData<Sar>, indicator: Indicator, defaultStyles: IndicatorStyle) => {
        const { current } = data
        const sar = current.indicatorData?.sar ?? Number.MIN_SAFE_INTEGER
        const kLineData = current.kLineData as KLineData
        const halfHL = (kLineData?.high + kLineData?.low) / 2
        const color = sar < halfHL
          ? formatValue(indicator.styles, 'circles[0].upColor', (defaultStyles.circles)[0].upColor) as string
          : formatValue(indicator.styles, 'circles[0].downColor', (defaultStyles.circles)[0].downColor) as string
        return { color }
      }
    }
  ],
  calc: (dataList: KLineData[], options: IndicatorCalcOptions<Sar>) => {
    const params = options.calcParams ?? []
    const startAf = params[0] / 100
    const step = params[1] / 100
    const maxAf = params[2] / 100

    // 加速因子
    let af = startAf
    // 极值
    let ep = -100
    // 判断是上涨还是下跌  false：下跌
    let isIncreasing = false
    let sar = 0
    return dataList.map((kLineData: KLineData, i: number) => {
      // 上一个周期的sar
      const preSar = sar
      const high = kLineData.high
      const low = kLineData.low
      if (isIncreasing) {
        // 上涨
        if (ep === -100 || ep < high) {
          // 重新初始化值
          ep = high
          af = Math.min(af + step, maxAf)
        }
        sar = preSar + af * (ep - preSar)
        const lowMin = Math.min(dataList[Math.max(1, i) - 1].low, low)
        if (sar > kLineData.low) {
          sar = ep
          // 重新初始化值
          af = startAf
          ep = -100
          isIncreasing = !isIncreasing
        } else if (sar > lowMin) {
          sar = lowMin
        }
      } else {
        if (ep === -100 || ep > low) {
          // 重新初始化值
          ep = low
          af = Math.min(af + step, maxAf)
        }
        sar = preSar + af * (ep - preSar)
        const highMax = Math.max(dataList[Math.max(1, i) - 1].high, high)
        if (sar < kLineData.high) {
          sar = ep
          // 重新初始化值
          af = 0
          ep = -100
          isIncreasing = !isIncreasing
        } else if (sar < highMax) {
          sar = highMax
        }
      }
      return { sar }
    })
  }
}

export default stopAndReverse
