// 计数排序的思路：首先把数列中的数据画正字放到哈希表中，并且找出最大的数字。从最小的数字循环到最大的数字，一个一个放入新数组。
// 时间复杂度： n+(max-min)
let countSort =(arr)=>{
    let hash = {}
    let max = 0
    let min = 0
    let sortArr = []
    for(let i=0 ; i<arr.length ; i++){
        arr[i] in hash ? hash[arr[i]] +=1 : hash[arr[i]] =1 
        arr[i] > max ? max = arr[i] : max = max
        arr[i] < min ? min = arr[i] : min = min
    }
    for(let j=min ; j <= max ;j++){
        if(j in hash){
            for(let k=0 ; k < hash[j] ; k++ ){
                sortArr.push(j)
            }
        }
    }
    return sortArr
}

countSort.call(null,[1,4,1,3,9,4,3])