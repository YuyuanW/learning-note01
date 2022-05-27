window.jQuery = function(selectorOrArray) {
    let elements;
    if (typeof selectorOrArray === 'string') elements = document.querySelectorAll(selectorOrArray);
    else if (selectorOrArray instanceof Array) elements = selectorOrArray;
    // api 可以操作 elements
    //const api =
    return {
        lastApi: selectorOrArray.lastApi,
        addClass (className) {
            for(let i = 0; i < elements.length; i++)elements[i].classList.add(className);
            return this //return api     
            ;
        },
        find (selector) {
            let array = [];
            for(let i = 0; i < elements.length; i++)array = array.concat(Array.from(elements[i].querySelectorAll(selector)));
            //NodeList是伪数组，进行concat会将伪数组作为一个整体拼起来到array上，所以需要Array.from
            array.lastApi = this;
            return jQuery(array) //这里newApi改变了操作的节点层级
            ;
        // const newApi = jQuery(array)
        // return newApi
        //如果我要实现链式操作，我需要返回一个api，array是一个数组。所以，创建一个api，通过jQuery；jQuery要可以接受数组，那么一开始就要做一个判断
        },
        end () {
            return this.lastApi;
        },
        each (fn) {
            for(let i = 0; i < elements.length; i++)fn.call(null, elements[i], i);
            return this;
        },
        parent () {
            const array = [];
            this.each((node)=>{
                if (array.indexOf(node.parentNode) === -1) array.push(node.parentNode);
            }) //each会有一个return
            ;
            return jQuery(array);
        },
        children () {
            const array = [];
            this.each((node)=>{
                array.push(...node.children);
            });
            //children返回HTMLCollection  
            // ...node.children === node.children[0],node.children[1]…… 展开操作符
            return jQuery(array);
        },
        print () {
            console.log(elements);
        }
    } //return api
    ;
};

//# sourceMappingURL=index.3e2f9b55.js.map
