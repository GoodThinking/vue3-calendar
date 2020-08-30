export default {
  changeTitle(state, routerName) {
    switch(routerName) {
      case 'day': 
          state.headerTitle = '当天信息'
          break
      case 'month':
          state.headerTitle = '近期假日'
          break
      case 'year':
          state.headerTitle = '今年假期'
          break
      default:
          state.headerTitle = '当天信息'
          break
    }   
  },
  setPlaceholder(state, routerName) {
    let date = new Date()
    let year = date.getFullYear()
    let mouth = date.getMonth() + 1
    let day = date.getDate()
    mouth = mouth < 10 ? '0' + mouth : mouth
    day = day < 10 ? '0' + day : day

    switch(routerName) {
      case 'day': 
          state.placeholder = `格式：${year}${mouth}${day}（${year}年${mouth}月${day}日）`
          break
      case 'month':
          state.placeholder = `格式：${year}${mouth}（${year}年${mouth}月）`
          break
      case 'year':
          state.placeholder = `格式：${year}（${year}年）`
          break
      default:
          state.placeholder = `格式：${year}${mouth}${day}（${year}年${mouth}月${day}日）`
          break
    }
  },
  setMaxlength(state,routerName) {
    switch(routerName) {
      case 'day': 
          state.maxlength = 8
          break
      case 'month':
          state.maxlength = 6
          break
      case 'year':
          state.maxlength = 4
          break
      default:
          state.maxlength = 8
          break
    } 
  },
  setError(state, value) {
    state.error_code = value
  },
  setList(state, payload) {
    const { field, data } = payload

    switch(field) {
      case 'day':
        state.dayData = data
        break
      case 'month':
        state.monthData = data
        break
      case 'year':
        state.yearData = data
        break
      default:
        state.dayData = data
        break
    }

    state.error_code = 0
  }
}