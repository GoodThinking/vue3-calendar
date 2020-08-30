import getData from './index'
import { zio } from '@/libs/utils'

function findData(store,string) {
    let list = []
    let newString = ''
    switch(string.length){
      case 8:
        list = [string.slice(0,4),zio(string.slice(4,6)),zio(string.slice(6))]
        newString = list.join('-')
        
        getData(store,'day',newString)
        break
      case 6:
        list = [string.slice(0,4),zio(string.slice(4,6))]
        newString = list.join('-') 
        console.log(newString)
        getData(store,'month',newString)
      case 4:
        getData(store,'year',string)
    }   
}

export default findData