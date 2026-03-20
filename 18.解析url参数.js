const parseParams = (url) => {
    const res = {}
    const temUrl = url.split('?')[1]
    let i = 1
    for(const item of temUrl.split('&')){
        console.log(item)
        let [key,val] = item.split('=')
        val = decodeURIComponent(val)
        if(res.hasOwnProperty(key)){
            res[key] = [].concat(res[key],val)
        }else{
            res[key] = val
        }
    }

    return JSON.stringify(res)
}
console.log(parseParams("http://baidu.com?a=1&a=2&a=1.2"));