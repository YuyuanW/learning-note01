window.$ = window.jQuery = function(selectorOrArrayOrTemplate) {
    let elements;
    if (typeof selectorOrArrayOrTemplate === "string") {
      if (selectorOrArrayOrTemplate[0] === "<") {
        // 创建 div
        elements = [createElement(selectorOrArrayOrTemplate)];
      } else {
        // 查找 div
        elements = document.querySelectorAll(selectorOrArrayOrTemplate);
      }
    } else if (selectorOrArrayOrTemplate instanceof Array) {
      elements = selectorOrArrayOrTemplate;
    }
  
    function createElement(string) {
      const container = document.createElement("template");
      container.innerHTML = string.trim();
      return container.content.firstChild;
    }
    // api 可以操作elements
    const api = Object.create(jQuery.prototype) // 创建一个对象，这个对象的 __proto__ 为括号里面的东西
    // const api = {__proto__: jQuery.prototype}
    Object.assign(api, {
      elements: elements,
      oldApi: selectorOrArrayOrTemplate.oldApi
    })
    // api.elements = elements
    // api.oldApi = selectorOrArrayOrTemplate.oldApi
    return api
  };
  
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    jquery: true,
    get(index) {
      return this.elements[index];
    },
    appendTo(node) {
      if (node instanceof Element) {
        this.each(el => node.appendChild(el));
      } else if (node.jquery === true) {
        this.each(el => node.get(0).appendChild(el));
      }
    },
    append(children) {
      if (children instanceof Element) {
        this.get(0).appendChild(children);
      } else if (children instanceof HTMLCollection) {
        for (let i = 0; i < children.length; i++) {
          this.get(0).appendChild(children[i]);
        }
      } else if (children.jquery === true) {
        children.each(node => this.get(0).appendChild(node));
      }
    },
    find(selector) {
      let array = [];
      for (let i = 0; i < this.elements.length; i++) {
        const elements2 = Array.from(this.elements[i].querySelectorAll(selector));
        array = array.concat(elements2);
      }
      array.oldApi = this; // this 就是 旧 api
      return jQuery(array);
    },
    each(fn) {
      for (let i = 0; i < this.elements.length; i++) {
        fn.call(null, this.elements[i], i);
      }
      return this;
    },
    parent() {
      const array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      return jQuery(array);
    },
    children() {
      const array = [];
      this.each(node => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(...node.children);
        }
      });
      return jQuery(array);
    },
    print() {
      console.log(this.elements);
    },
    // 闭包：函数访问外部的变量
    addClass(className) {
      for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];
        element.classList.add(className);
      }
      return this;
    },
    end() {
      return this.oldApi; // this 就是新 api
    }
  };
  
//1.设置变量 jQuery.prototype 但是要注意里面constructor   剪切前面写好的api到这个对象中
//2.将api.__proto__指向jQuery.prototype 别直接赋值，创建一个api对象，让新的api指向原型，在这个新的api上增加公共变量然后使用时变量前面加上this，变量有作用域
//3.起别名，jQuery.prototype 太长了 赋给jQuery.fn