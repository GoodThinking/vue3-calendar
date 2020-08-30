import { getTabDate } from '@/libs/utils'

const tabData = [
  {
    iconText: getTabDate('day'),
    path: '/',
    tabText: '当天'
  },
  {
    iconText: getTabDate('month'),
    path: '/month',
    tabText: '近期'
  },{
    iconText: getTabDate('year'),
    path: '/year',
    tabText: '当年'
  }
]

export {
  tabData
}