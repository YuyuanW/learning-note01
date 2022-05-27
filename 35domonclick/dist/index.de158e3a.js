const level1 = document.querySelector('.level1');
const level2 = document.querySelector('.level2');
const level3 = document.querySelector('.level3');
const level4 = document.querySelector('.level4');
const level5 = document.querySelector('.level5');
const level6 = document.querySelector('.level6');
const level7 = document.querySelector('.level7');
let n = 1;
const removeX = (e)=>{
    const t = e.currentTarget;
    setTimeout(()=>{
        t.classList.remove('x');
    }, n * 1000);
    n += 1;
};
const addX = (e)=>{
    const t = e.currentTarget;
    setTimeout(()=>{
        t.classList.add('x');
    }, n * 1000);
    n += 1;
};
level1.addEventListener('click', removeX, true);
level1.addEventListener('click', addX);
level2.addEventListener('click', removeX, true);
level2.addEventListener('click', addX);
level3.addEventListener('click', removeX, true);
level3.addEventListener('click', addX);
level4.addEventListener('click', removeX, true);
console.log(1);
level4.addEventListener('click', (e)=>{
    e.stopPropagation(), addX(e);
});
console.log(2);
level5.addEventListener('click', removeX, true);
level5.addEventListener('click', addX);
level6.addEventListener('click', removeX, true);
level6.addEventListener('click', addX);
level7.addEventListener('click', removeX, true);
level7.addEventListener('click', addX);

//# sourceMappingURL=index.de158e3a.js.map
