//好了，我要开始自定义一个事件了
button1.addEventListener('click', ()=>{
    const event = new CustomEvent('YuYuanW', {
        detail: {
            name: 'YuYuan',
            age: 21
        },
        bubbles: true,
        cancelable: false
    });
    button1.dispatchEvent(event);
});
div1.addEventListener('YuYuanW', (e)=>{
    console.log('YuYuanW被触发了'), console.log(e.detail);
});

//# sourceMappingURL=index.e76b517f.js.map
