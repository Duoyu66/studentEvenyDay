// 防抖
export const fangdou=(fn, delay)=> {
    let timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // 箭头函数没有自己的this，改变指向，使其指向input。同时执行fn函数
            fn.call(this);
        }, 2000);
    };
}
// 节流
export const  jieliu=(fn, wait)=> {
    // 获取初始时间
    let start = 0;
    return function () {
        let now = new Date().getTime();
        // 判断前后时间戳的差值
        if (now - start < 2000) return;
        fn();
        // 重新设置初始时间
        start = now;
    }
}



























