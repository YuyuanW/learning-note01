window.jQuery = function(selectorOrArray){
    let elements
    if(typeof selectorOrArray === 'string'){
          elements = document.querySelectorAll(selectorOrArray)
      }else if(selectorOrArray instanceof Array){elements = selectorOrArray}
    return {
      addClass(className){
          for(let i=0;i<elements.length;i++){
            elements[i].classList.add(className)
          }
        return this
      },
      find(selector){
          let array = []
          for(let i=0; i<elements.length ; i++){
            array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
          }
          return jQuery(array)
      }
    }
  }
  
  window.$ = window.jQuery
  
  $('#test').find('.child').addClass('red')