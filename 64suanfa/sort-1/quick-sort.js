// 快速排序的思想：二分法 递归
// 快速排序的思路： 选一个在中间位置的值，比它大的排后面去，比它小的，排到前面，在前面位置选中间值，排列，在后面选中间值，排列
// 时间复杂度：nlog2 n

let quick = (numbers)=>{
    if(numbers.length > 1){
        let index = Math.floor((numbers.length)/2) 
        let pivot = numbers[index]
        let left = []
        let right = []
        for(let i=0 ; i<numbers.length ; i++ ){
            if(i != index){
                numbers[i] > pivot ? right.push(numbers[i]) : left.push(numbers[i])
            }
        }
        return  quick(left).concat([pivot],quick(right))
    }else{
        return numbers
    }
    
}
quick.call(this,[1,3,4,2,1,8,4,3,5,7,0])