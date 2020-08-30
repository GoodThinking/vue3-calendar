import {
  getDayData,
  getYearData,
  getMonthData
} from './request'

import {
  formatChsDate,
  formatChsArr
} from '@/libs/utils'

export default async(store, field, date) => {
  let data = null

  switch(field) {
    case 'day':
      data = await getDayData(date)
      break
    case 'month':
      data = await getMonthData(date)
      break
    case 'year':
      data = await getYearData(date)
      break
    default:
      break
  }

  if(data.error_code !== 0) {
    store.commit('setError',data.error_code)
    return
  }

  let res = null
  switch(field) {
    case 'day':
      res = data.result.data
      res.date = formatChsDate(res.date, 'day')
      
      res['year-month'] = formatChsDate(res['year-month'], 'month')
      break
    case 'month':
      res = data.result.data.holiday_array
      res = formatChsArr(res, 'festival')
      break
    case 'year':
      res = data.result.data.holiday_list
      res = formatChsArr(res, 'startday')
      break
  }

  store.commit('setList',{
    field,
    data: res
  })
}