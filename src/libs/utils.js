function _zeroDay(value) {
  return value < 10 ? ('0'+ value) : value
}

function zio(string) {
  if(string.indexOf('0') == 0) {
    return string.slice(1)
  }
  return string
}

const getTabDate = function(type) {
  const date =  new Date()

  switch(type){
    case 'day':
        return _zeroDay(date.getDate().toString())
    case 'month':
        return _zeroDay((date.getMonth()+1).toString())
    case 'year':
        return date.getFullYear().toString().substr(2)
  }
}

function formatChsDate(date, type) {
  let _arr = date.split('-')
  
  switch(type) {
    case 'day':
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`
    case 'month':
      return `${_arr[0]}年${_arr[1]}月`
    case 'year':
      return `${_arr[0]}年`
    default:
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`
  }
}

function formatChsArr(arr, key) {
  console.log(arr)
  return arr.map( item =>{
    item[key] = formatChsDate(item[key])
    return item
  })
}

function getNowDate(type) {
  const date = new Date()

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  

  switch(type) {
    case 'day':
      return `${year}-${month}-${day}`
    case 'month':
      return `${year}-${month}`
    case 'year':
      return `${year}`
  }
}

function debounce(func,wait) {
  let timer = null

  const that = this
  return function(...args) {
    if(timer) clearTimeout(timer)

    timer = setTimeout(()=>{
      func.apply(that,args)
    },wait)
  }
}


export {
  zio,
  getTabDate,
  formatChsDate,
  formatChsArr,
  getNowDate,
  debounce
}