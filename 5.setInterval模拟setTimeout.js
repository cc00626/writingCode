const setTimeout = (fn,time) => {
    let timer = setInterval(() => {
        fn()
        clearInterval(timer)
    }, time);

    return () => clearInterval(timer)
}