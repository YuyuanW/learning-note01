// 思路：每次都找出最小的，然后把最小的值放到前面，再把剩余的部分，继续找出最小的，把这一部分的最小值又放到最前面
// 思想： 递归
// 写递归的代码，你不要看整个过程，你要看的是怎么重复的，如何递进和归出的，递进是重复，归出是递不进不要死循环了
// 时间复杂度； n²
// 选择排序的代码如下：


let sort = (numbers) =>{
    for(let i=0 ; i<numbers.length-1; i++){
       
        let index = minIndex(numbers.slice(i))+i
       
        swap(numbers,i,index)
    }  
    return numbers
}

let minIndex = (number)=>{
    let index = 0
    for(let i=0 ; i<number.length ; i++){
        number[i] < number[index] ? index = i : index = index
    }
    return index
}

let swap = (number,i,j)=>{
    let temp = number[i]
    number[i] = number[j]
    number[j] = temp
    return number
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
sort.call(null,[3,6,1,3,5])
